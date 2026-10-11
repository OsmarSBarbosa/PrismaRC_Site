/**
 * Recebe os contatos do formulário do site e grava na planilha.
 * Instalação: docs/LEADS-PLANILHA.md
 */

// E-mail que recebe um aviso a cada novo contato. Deixe '' para não avisar.
const NOTIFY_EMAIL = '';

const SHEET_NAME = 'Contatos';

// [campo enviado pelo site, título da coluna]
const COLUMNS = [
  ['nome', 'Nome'],
  ['empresa', 'Empresa'],
  ['telefone', 'Telefone / WhatsApp'],
  ['email', 'E-mail'],
  ['mensagem', 'Mensagem'],
  ['pagina', 'Página'],
  ['utm_source', 'utm_source'],
  ['utm_medium', 'utm_medium'],
  ['utm_campaign', 'utm_campaign'],
  ['utm_content', 'utm_content'],
  ['utm_term', 'utm_term'],
  ['li_fat_id', 'li_fat_id (LinkedIn)'],
];

function doPost(e) {
  const params = (e && e.parameter) || {};

  // Campo-armadilha preenchido = robô de spam.
  if (params.website) return ok_();

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
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow(['Data / hora'].concat(COLUMNS.map(([, title]) => title)));
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, COLUMNS.length + 1).setFontWeight('bold');
  }
  return sheet;
}

// Limita o tamanho e impede que um texto começando com = + - @ seja
// interpretado como fórmula pela planilha.
function clean_(value) {
  const text = String(value || '').trim().slice(0, 2000);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function notify_(values) {
  const lines = COLUMNS.map(([, title], i) => title + ': ' + values[i]).filter(
    (line) => !/: $/.test(line)
  );
  MailApp.sendEmail(
    NOTIFY_EMAIL,
    'Novo contato pelo site — ' + (values[0] || 'sem nome'),
    lines.join('\n') + '\n\nPlanilha: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl()
  );
}

function ok_() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
    ContentService.MimeType.JSON
  );
}

// Teste manual: no editor, selecione "testar" e clique em Executar.
// Deve aparecer uma linha "Teste" na aba Contatos.
function testar() {
  doPost({ parameter: { nome: 'Teste', email: 'teste@example.com', pagina: '/teste' } });
}
