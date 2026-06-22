// Strings do site em pt-BR — Prisma Empresarial.
// Centralize aqui todos os textos visíveis ao usuário para facilitar edições.

export const contactInfo = {
  // WhatsApp / telefone (DDD 19). Número do material de divulgação (outdoor).
  whatsappNumber: '5519925083792', // formato internacional p/ link wa.me
  phoneDisplay: '(19) 92508-3792',
  email: 'contato@prismaempresarial.com.br',
  site: 'www.prismaempresarial.com.br',
  address: 'Rua Ampac, 134 — Distrito Industrial, Rio Claro/SP',
  mapsQuery: 'Distrito Industrial Rio Claro SP',
};

export const strings = {
  // --- Navbar ---
  nav: {
    home: 'Início',
    about: 'O Empreendimento',
    features: 'Diferenciais',
    location: 'Localização',
    lots: 'Lotes',
    gallery: 'Galeria',
    contact: 'Contato',
    cta: 'Fale conosco',
  },

  // --- Hero (banner principal) ---
  hero: {
    eyebrow: 'Loteamento Industrial · Rio Claro/SP',
    title: 'O espaço estratégico da sua expansão.',
    subtitle:
      'Loteamento empresarial planejado para indústria, comércio e serviços. Lotes a partir de 600m², infraestrutura completa e licenciamento CETESB para qualquer atividade.',
    ctaPrimary: 'Quero saber mais',
    ctaSecondary: 'Ver os lotes',
    stats: [
      { value: '600m²', label: 'Lotes a partir de' },
      { value: '98', label: 'Lotes disponíveis' },
      { value: '+100mil m²', label: 'De área útil' },
      { value: 'CETESB', label: 'Licenciado (FC 5)' },
    ],
  },

  // --- Tagline / Frase de efeito ---
  tagline: {
    text: 'Sua empresa no lugar certo.',
    subtext:
      'Invista em um endereço preparado para o futuro da sua empresa.',
  },

  // --- O empreendimento (sobre) ---
  about: {
    tag: 'O Empreendimento',
    heading: 'O lugar certo para sua empresa crescer.',
    paragraphs: [
      'O Prisma Empresarial é um loteamento planejado exclusivamente para a instalação de indústrias, comércio e serviços, localizado no Distrito Industrial de Rio Claro/SP.',
      'Aqui tudo foi pensado para que a sua empresa possa trabalhar e crescer em um ambiente adequado, seguro e com fácil acesso. Um empreendimento 100% regularizado, entregue e pronto para construir.',
    ],
    highlights: [
      'Lotes a partir de 600m², com possibilidade de composição de áreas de até 10.000m²',
      'Mais de 100.000m² de área útil distribuídos em 98 lotes',
      'Empreendimento entregue e pronto para construir',
      'Próximo de grandes empresas e de um amplo sistema viário',
    ],
  },

  // --- Seção de diferenciais ---
  features: {
    tag: 'Diferenciais',
    heading: 'Infraestrutura completa, do projeto à operação.',
    subheading:
      'Cada detalhe foi planejado para receber a sua empresa e o tráfego pesado da indústria.',
    items: [
      {
        icon: 'license',
        title: 'Licenciamento CETESB',
        description:
          'Licenciado para receber todos os tipos de atividade (fator de complexidade 5). Sua empresa trabalha sem restrições.',
      },
      {
        icon: 'check',
        title: 'Pronto para construir',
        description:
          '100% regularizado e entregue. Empreendimento liberado para você começar a obra da sua empresa.',
      },
      {
        icon: 'road',
        title: 'Vias largas e robustas',
        description:
          'Ruas com 21m de largura e asfalto reforçado para o tráfego de caminhões e máquinas pesadas.',
      },
      {
        icon: 'avenue',
        title: 'Avenida principal',
        description:
          'Pista dupla com canteiro central arborizado por palmeiras imperiais e ciclovia exclusiva.',
      },
      {
        icon: 'parking',
        title: 'Estacionamento público',
        description:
          'Mais de 100 vagas de estacionamento coletivo na Avenida Prisma.',
      },
      {
        icon: 'shield',
        title: 'Acesso único',
        description:
          'Entrada única no loteamento, permitindo maior controle e segurança para todos.',
      },
      {
        icon: 'expand',
        title: 'Áreas sob medida',
        description:
          'Composição de lotes para empresas que precisam de áreas maiores, de até 10.000m².',
      },
      {
        icon: 'pin',
        title: 'Localização estratégica',
        description:
          'No Distrito Industrial de Rio Claro, a 10 min do centro e a 500m da Rodovia Wilson Finardi.',
      },
    ],
  },

  // --- Localização ---
  location: {
    tag: 'Localização',
    heading: 'Acessos rápidos a rodovias, cidades e aeroportos.',
    intro:
      'Localizado em Rio Claro/SP, o Prisma Empresarial tem acesso facilitado às principais rodovias da região, conectando sua empresa aos maiores centros econômicos do interior paulista.',
    highwaysTitle: 'Principais acessos',
    highways: [
      { name: 'SP-310 — Washington Luís', time: '10 min' },
      { name: 'SP-191 — Wilson Finardi', time: '3 min' },
      { name: 'SP-127 — Fausto Santo Mauro', time: '15 min' },
      { name: 'Rod. Anhanguera (SP-330)', time: '20 min' },
      { name: 'Rod. dos Bandeirantes (SP-348)', time: '30 min' },
      { name: 'Aeroporto de Viracopos', time: '1h20' },
    ],
    citiesTitle: 'Cidades próximas',
    cities: [
      { name: 'Araras', time: '15 min' },
      { name: 'Limeira', time: '30 min' },
      { name: 'Piracicaba', time: '30 min' },
      { name: 'São Carlos', time: '45 min' },
      { name: 'Campinas', time: '1h00' },
      { name: 'Jundiaí', time: '1h30' },
      { name: 'São Paulo', time: '2h00' },
    ],
    landmarksTitle: 'Pontos de referência',
    landmarks: [
      'Apenas 10 min do centro de Rio Claro/SP',
      '500 metros até a Rodovia Wilson Finardi',
      '700 metros da fábrica da Tigre',
      '9 km para a Rodovia Washington Luís',
      '16 km para a Rodovia Anhanguera',
    ],
    mapAlt: 'Mapa de acessos do Prisma Empresarial em Rio Claro/SP',
    mapCta: 'Abrir no Google Maps',
  },

  // --- Planta interativa ---
  interactivePlot: {
    tag: 'Lotes',
    heading: 'O espaço que sua empresa precisar.',
    subheading:
      'Lotes a partir de 600m² com possibilidade de composição de áreas de até 10.000m². Clique em um lote no mapa para saber a disponibilidade.',
    planAlt: 'Planta de implantação do loteamento Prisma Empresarial',
    legendTitle: 'Legenda',
    availableLabel: 'Disponível',
    soldLabel: 'Vendido',
    reservedLabel: 'Reservado',
    areaLabel: 'Área',
    areaUnit: 'm²',
    ctaText: 'Consultar disponibilidade e valores',
    note: 'Imagem meramente ilustrativa. Disponibilidade sujeita a alteração — consulte um corretor.',
  },

  // --- Galeria ---
  gallery: {
    tag: 'Galeria',
    heading: 'Conheça o Prisma Empresarial.',
    subheading: 'Imagens do empreendimento e do projeto.',
    altPrefix: 'Prisma Empresarial',
  },

  // --- Formulário de interesse ---
  interestForm: {
    tag: 'Fale conosco',
    heading: 'Garanta o seu lote no Prisma Empresarial.',
    subheading:
      'Preencha o formulário e um de nossos consultores entrará em contato para apresentar o empreendimento.',
    namePlaceholder: 'Nome completo',
    companyPlaceholder: 'Empresa (opcional)',
    phonePlaceholder: 'WhatsApp / Telefone',
    emailPlaceholder: 'E-mail',
    messagePlaceholder: 'Conte um pouco sobre a sua necessidade (opcional)',
    submitButton: 'Enviar interesse',
    successMessage: 'Recebemos seu contato! Falaremos com você em breve.',
    errorMessage: 'Algo deu errado. Tente novamente ou fale pelo WhatsApp.',
    whatsappAlt: 'Prefere falar agora? Chame no WhatsApp.',
  },

  // --- Contato ---
  contact: {
    tag: 'Contato',
    heading: 'Conheça pessoalmente o empreendimento.',
    subheading:
      'Fale com nossa equipe e agende uma visita ao Prisma Empresarial em Rio Claro/SP.',
    phoneLabel: 'Telefone / WhatsApp',
    emailLabel: 'E-mail',
    addressLabel: 'Endereço',
    siteLabel: 'Site',
    whatsappMessage:
      'Olá! Tenho interesse no Prisma Empresarial e gostaria de mais informações.',
    whatsappLabel: 'Falar pelo WhatsApp',
  },

  // --- Footer ---
  footer: {
    tagline: 'O espaço estratégico da sua expansão.',
    rights: '© 2026 Prisma Empresarial. Todos os direitos reservados.',
    legal:
      'Projeto aprovado pela Prefeitura Municipal de Rio Claro e registrado no 1º Oficial de Registro de Imóveis de Rio Claro sob o nº R.9 da matrícula 54.383, em 08 de março de 2019. Todas as imagens são meramente ilustrativas, podendo haver diferenças no paisagismo.',
    navTitle: 'Navegação',
    contactTitle: 'Contato',
    whatsappCta: 'WhatsApp',
  },
};
