/** @OnlyCurrentDoc */
/**
 * Recebe do site um registro a cada clique nos botões de WhatsApp e telefone
 * e grava uma linha na aba "Cliques" desta planilha.
 * Instalação e atualização: docs/LEADS-PLANILHA.md
 */

// E-mail que recebe um aviso a cada clique. Deixe '' para não avisar.
const NOTIFY_EMAIL = '';

const SHEET_NAME = 'Cliques';

// [campo enviado pelo site, título da coluna]
const COLUMNS = [
  ['codigo', 'Código'],
  ['tipo', 'Tipo'],
  ['botao', 'Botão'],
  ['pagina', 'Página'],
  ['cidade', 'Cidade'],
  ['estado', 'Estado'],
  ['pais', 'País'],
  ['cep', 'CEP (aprox.)'],
  ['latitude', 'Latitude (aprox.)'],
  ['longitude', 'Longitude (aprox.)'],
  ['operadora', 'Operadora'],
  ['organizacao', 'Organização da rede'],
  ['ip', 'IP'],
  ['origem', 'Origem'],
  ['utm_source', 'utm_source'],
  ['utm_medium', 'utm_medium'],
  ['utm_campaign', 'utm_campaign'],
  ['utm_content', 'utm_content'],
  ['utm_term', 'utm_term'],
  ['li_fat_id', 'li_fat_id (LinkedIn)'],
  ['gclid', 'gclid (Google)'],
  ['fbclid', 'fbclid (Meta)'],
  ['entrada', 'Página de entrada'],
  ['referrer', 'Referrer completo'],
  ['dispositivo', 'Dispositivo'],
  ['sistema', 'Sistema'],
  ['navegador', 'Navegador'],
  ['tela', 'Tela'],
  ['idioma', 'Idioma'],
  ['fuso_horario', 'Fuso horário'],
  ['fuso_ip', 'Fuso horário (IP)'],
  ['tempo_pagina_s', 'Tempo na página (s)'],
  ['tempo_sessao_s', 'Tempo no site (s)'],
  ['rolagem_pct', 'Rolagem máx. (%)'],
  ['secoes_vistas', 'Seções vistas'],
  ['visitante', 'Visitante'],
  ['visitas', 'Nº de visitas'],
  ['primeira_visita', 'Primeira visita'],
  ['user_agent', 'User agent'],
];

function doPost(e) {
  const params = (e && e.parameter) || {};

  const values = COLUMNS.map(([field]) => clean_(params[field]));
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    getSheet_().appendRow([new Date()].concat(values));
  } finally {
    lock.releaseLock();
  }

  if (NOTIFY_EMAIL) notify_(values);
  return ok_();
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME, 0);
    sheet.appendRow(['Data / hora'].concat(COLUMNS.map(([, title]) => title)));
    sheet.setFrozenRows(1);
    sheet.setFrozenColumns(2);
    sheet.getRange(1, 1, 1, COLUMNS.length + 1).setFontWeight('bold');
  }
  return sheet;
}

// Limita o tamanho e impede que um texto começando com = + - @ seja
// interpretado como fórmula pela planilha.
function clean_(value) {
  const text = String(value === undefined || value === null ? '' : value)
    .trim()
    .slice(0, 2000);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function notify_(values) {
  const lines = COLUMNS.map(([, title], i) => title + ': ' + values[i]).filter(
    (line) => !/: $/.test(line)
  );
  const where = [values[4], values[5]].filter(Boolean).join('/') || 'local desconhecido';
  MailApp.sendEmail(
    NOTIFY_EMAIL,
    'Novo clique no ' + values[1] + ' — ' + values[0] + ' (' + where + ')',
    lines.join('\n') + '\n\nPlanilha: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl()
  );
}

function ok_() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
    ContentService.MimeType.JSON
  );
}

// Teste manual: no editor, selecione "testar" e clique em Executar.
// Deve aparecer uma linha "PR-TEST" na aba Cliques.
function testar() {
  doPost({
    parameter: {
      codigo: 'PR-TEST',
      tipo: 'whatsapp',
      botao: 'teste',
      pagina: '/',
      cidade: 'Rio Claro',
      estado: 'São Paulo',
    },
  });
}
