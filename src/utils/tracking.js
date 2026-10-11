import { leadsEndpoint } from '../config';

// Registro de cliques nos botões de WhatsApp e telefone: cada clique grava uma
// linha na planilha (Apps Script) com um código de referência, que também vai
// na mensagem do WhatsApp para ligar a conversa à origem do contato.
// O que é coletado está descrito na Política de Privacidade (/privacidade/).

// Parâmetros de anúncios: utm_*, clique do LinkedIn (li_fat_id), Google (gclid)
// e Meta (fbclid).
const CAMPAIGN_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'li_fat_id',
  'gclid',
  'fbclid',
];

const SESSION_KEY = 'prisma:sessao';
const VISITOR_KEY = 'prisma:visitante';
const GEO_KEY = 'prisma:geo';

// ipwhois.io (plano gratuito: 1.000 consultas/dia para o site todo).
const GEO_URL =
  'https://ipwho.is/?lang=pt-BR&fields=success,ip,city,region,country,postal,latitude,longitude,connection.isp,connection.org,timezone.id';
// Tempo máximo que o registro do clique espera pela localização.
const GEO_WAIT_MS = 2000;

const SECTION_NAMES = {
  home: 'Topo',
  about: 'O Empreendimento',
  features: 'Diferenciais',
  location: 'Localização',
  lots: 'Lotes',
  gallery: 'Galeria',
  interesse: 'Fale conosco',
  contact: 'Contato',
};

const pageStart = performance.now();
let maxScroll = 0;
const sectionsSeen = [];
let geoPromise = null;
let sectionsObserved = false;

// --- armazenamento (pode falhar em navegação privada) ---
function read(storage, key) {
  try {
    return JSON.parse(storage.getItem(key));
  } catch {
    return null;
  }
}

function write(storage, key, value) {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch {
    // segue sem guardar
  }
}

// --- sessão: origem da visita e parâmetros do anúncio ---
function captureSession() {
  const params = new URLSearchParams(window.location.search);
  const campaign = {};
  CAMPAIGN_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) campaign[key] = value;
  });

  const session = read(sessionStorage, SESSION_KEY);
  if (!session) {
    write(sessionStorage, SESSION_KEY, {
      inicio: Date.now(),
      entrada: window.location.pathname + window.location.search,
      referrer: document.referrer,
      campanha: campaign,
    });
    return true; // nova sessão
  }
  // Entrou de novo por outro anúncio na mesma sessão: vale o anúncio mais recente.
  if (Object.keys(campaign).length) {
    write(sessionStorage, SESSION_KEY, { ...session, campanha: campaign });
  }
  return false;
}

// --- visitante: identificador anônimo e número de visitas ---
function countVisit(isNewSession) {
  let visitor = read(localStorage, VISITOR_KEY);
  if (!visitor) {
    visitor = { id: randomId(12), primeira: new Date().toISOString(), visitas: 0 };
  }
  if (isNewSession) visitor.visitas += 1;
  write(localStorage, VISITOR_KEY, visitor);
}

// --- comportamento na página ---
function watchScroll() {
  const update = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? Math.round((window.scrollY / scrollable) * 100) : 100;
    maxScroll = Math.max(maxScroll, Math.min(percent, 100));
  };
  window.addEventListener('scroll', update, { passive: true });
}

// Chamada depois que a página é montada (App), para observar as seções.
export function observeSections() {
  if (sectionsObserved || !('IntersectionObserver' in window)) return;
  sectionsObserved = true;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const name = SECTION_NAMES[entry.target.id] || entry.target.id;
        if (!sectionsSeen.includes(name)) sectionsSeen.push(name);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.35 }
  );
  document.querySelectorAll('section[id]').forEach((el) => observer.observe(el));
}

// --- localização aproximada pelo IP ---
function loadGeo() {
  if (geoPromise) return geoPromise;
  const cached = read(sessionStorage, GEO_KEY);
  if (cached) {
    geoPromise = Promise.resolve(cached);
    return geoPromise;
  }
  geoPromise = fetch(GEO_URL)
    .then((response) => response.json())
    .then((data) => {
      if (!data.success) return null;
      const geo = {
        ip: data.ip,
        cidade: data.city,
        estado: data.region,
        pais: data.country,
        cep: data.postal,
        latitude: data.latitude,
        longitude: data.longitude,
        operadora: data.connection?.isp,
        organizacao: data.connection?.org,
        fuso_ip: data.timezone?.id,
      };
      write(sessionStorage, GEO_KEY, geo);
      return geo;
    })
    .catch(() => null);
  return geoPromise;
}

// A consulta só começa na primeira interação, para não gastar a cota diária
// com robôs que apenas carregam a página.
function loadGeoOnInteraction() {
  const events = ['pointerdown', 'pointermove', 'scroll', 'keydown', 'touchstart'];
  const start = () => {
    events.forEach((name) => window.removeEventListener(name, start));
    loadGeo();
  };
  events.forEach((name) => window.addEventListener(name, start, { passive: true }));
}

// --- dispositivo ---
function deviceInfo() {
  const ua = navigator.userAgent;
  const iPadOS = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
  const tablet = iPadOS || /iPad|Tablet|Android(?!.*Mobile)/i.test(ua);
  const mobile = /Mobi|iPhone|iPod|Android/i.test(ua);

  let sistema = 'outro';
  if (/Windows/.test(ua)) sistema = 'Windows';
  else if (/iPhone|iPad|iPod/.test(ua) || iPadOS) sistema = 'iOS';
  else if (/Android/.test(ua)) sistema = 'Android';
  else if (/Macintosh|Mac OS X/.test(ua)) sistema = 'macOS';
  else if (/CrOS/.test(ua)) sistema = 'ChromeOS';
  else if (/Linux/.test(ua)) sistema = 'Linux';

  let navegador = 'outro';
  if (/LinkedInApp/i.test(ua)) navegador = 'LinkedIn (app)';
  else if (/FBAN|FBAV/.test(ua)) navegador = 'Facebook (app)';
  else if (/Instagram/.test(ua)) navegador = 'Instagram (app)';
  else if (/Edg\//.test(ua)) navegador = 'Edge';
  else if (/OPR\/|Opera/.test(ua)) navegador = 'Opera';
  else if (/SamsungBrowser/.test(ua)) navegador = 'Samsung Internet';
  else if (/CriOS|Chrome\//.test(ua)) navegador = 'Chrome';
  else if (/FxiOS|Firefox\//.test(ua)) navegador = 'Firefox';
  else if (/Safari\//.test(ua)) navegador = 'Safari';

  return {
    dispositivo: tablet ? 'tablet' : mobile ? 'celular' : 'computador',
    sistema,
    navegador,
    tela: `${window.screen.width}x${window.screen.height}`,
    idioma: navigator.language,
    fuso_horario: Intl.DateTimeFormat().resolvedOptions().timeZone,
    user_agent: ua,
  };
}

// --- código de referência (ex.: PR-7K3F), sem caracteres ambíguos ---
function randomId(length) {
  const alphabet = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';
  const values = crypto.getRandomValues(new Uint32Array(length));
  return Array.from(values, (v) => alphabet[v % alphabet.length]).join('');
}

function referrerLabel(referrer) {
  if (!referrer) return 'acesso direto';
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, '');
    return host === window.location.hostname ? 'navegação interna' : host;
  } catch {
    return referrer;
  }
}

// --- envio do clique para a planilha ---
async function sendClick(info) {
  if (!leadsEndpoint) return;

  const geo = await Promise.race([
    loadGeo(),
    new Promise((resolve) => setTimeout(() => resolve(null), GEO_WAIT_MS)),
  ]);
  const session = read(sessionStorage, SESSION_KEY) || {};
  const visitor = read(localStorage, VISITOR_KEY) || {};

  const data = {
    ...info,
    pagina: window.location.pathname,
    entrada: session.entrada,
    origem: referrerLabel(session.referrer),
    referrer: session.referrer,
    ...session.campanha,
    tempo_pagina_s: Math.round((performance.now() - pageStart) / 1000),
    tempo_sessao_s: session.inicio ? Math.round((Date.now() - session.inicio) / 1000) : '',
    rolagem_pct: maxScroll,
    secoes_vistas: sectionsSeen.join(' > '),
    visitante: visitor.id,
    visitas: visitor.visitas,
    primeira_visita: visitor.primeira,
    ...deviceInfo(),
    ...(geo || { cidade: 'indisponível' }),
  };

  const body = new URLSearchParams();
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) body.append(key, value);
  });

  if (navigator.sendBeacon?.(leadsEndpoint, body)) return;
  fetch(leadsEndpoint, { method: 'POST', body, mode: 'no-cors', keepalive: true }).catch(
    () => {}
  );
}

// Intercepta cliques em qualquer link de WhatsApp (wa.me) ou telefone (tel:).
// O botão é identificado pelo atributo data-botao do link.
function onClick(event) {
  const link = event.target.closest?.('a[href]');
  if (!link) return;

  const isWhatsApp = /^https:\/\/wa\.me\//.test(link.href);
  const isPhone = link.href.startsWith('tel:');
  if (!isWhatsApp && !isPhone) return;

  const codigo = `PR-${randomId(4)}`;

  if (isWhatsApp) {
    // Acrescenta o código à mensagem (sempre a partir do link original).
    if (!link.dataset.waOriginal) link.dataset.waOriginal = link.href;
    const url = new URL(link.dataset.waOriginal);
    const text = url.searchParams.get('text') || '';
    link.href = `${url.origin}${url.pathname}?text=${encodeURIComponent(
      `${text}\n\nRef: ${codigo}`.trim()
    )}`;
  }

  sendClick({
    tipo: isWhatsApp ? 'whatsapp' : 'telefone',
    botao: link.dataset.botao || 'outro',
    codigo,
  });
}

export function initTracking() {
  const isNewSession = captureSession();
  countVisit(isNewSession);
  watchScroll();
  loadGeoOnInteraction();
  // Fase de captura: roda antes da navegação do link.
  document.addEventListener('click', onClick, true);
}
