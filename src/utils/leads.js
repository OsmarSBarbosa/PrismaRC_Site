import { leadsEndpoint } from '../config';

// Parâmetros de campanha guardados com cada contato, para saber de qual
// anúncio ele veio. li_fat_id é o identificador de clique do LinkedIn.
const CAMPAIGN_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'li_fat_id',
];
const STORAGE_KEY = 'prisma:campanha';

// Chamada ao carregar a página: guarda os parâmetros da URL de entrada na
// sessão, para não perdê-los se a URL mudar antes do envio do formulário.
export function captureCampaignParams() {
  try {
    const params = new URLSearchParams(window.location.search);
    const found = {};
    CAMPAIGN_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) found[key] = value;
    });
    if (Object.keys(found).length) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    }
  } catch {
    // sessionStorage indisponível (ex.: navegação privada): segue sem campanha.
  }
}

function campaignParams() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

// Envia o contato para a planilha. Usa sendBeacon, que conclui o envio mesmo
// que a página abra o WhatsApp logo em seguida. Retorna false se o envio não
// estiver configurado.
export function sendLead(fields) {
  if (!leadsEndpoint) return false;

  const body = new URLSearchParams({
    ...fields,
    ...campaignParams(),
    pagina: window.location.pathname,
  });

  if (navigator.sendBeacon?.(leadsEndpoint, body)) return true;

  fetch(leadsEndpoint, { method: 'POST', body, mode: 'no-cors', keepalive: true }).catch(
    () => {}
  );
  return true;
}
