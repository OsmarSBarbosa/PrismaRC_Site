// Configurações do site que não são textos.

// URL do Web App do Google Apps Script que grava na planilha cada clique nos
// botões de WhatsApp e telefone (termina em /exec). Ver docs/LEADS-PLANILHA.md.
// Vazio = os botões funcionam normalmente, sem gravar os cliques.
export const leadsEndpoint =
  'https://script.google.com/macros/s/AKfycbzvuJL5IOv0e7XO7XGqAztKSq42Zm5nXfJj6vdNfYY17s2YJs_8pYlCNbv5CaccBfveTQ/exec';

// Responsável pelos dados (controlador), exibido na Política de Privacidade
// (/privacidade/).
export const privacyController = {
  razaoSocial: 'Prisma RC Empreendimentos Imobiliarios SPE Ltda',
  email: 'prismarc.contato@gmail.com',
};

// Prazo de guarda dos registros de cliques, citado na Política de Privacidade.
export const retentionMonths = 24;
