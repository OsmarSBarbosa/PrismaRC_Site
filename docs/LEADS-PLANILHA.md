# Gravar os contatos do formulário no Google Planilhas

Quando alguém envia o formulário do site, o contato é gravado numa planilha do
Google e, em seguida, o WhatsApp abre com a mensagem pronta (como antes). Assim
nenhum contato se perde, mesmo que a pessoa desista de enviar no WhatsApp.

Cada linha da planilha traz: data/hora, nome, empresa, telefone, e-mail,
mensagem, página de origem e os parâmetros de campanha do anúncio
(`utm_source`, `utm_campaign`… e `li_fat_id`, o identificador de clique do
LinkedIn).

Leva uns 10 minutos. Use a conta Google da empresa que deve ser dona dos
contatos.

## 1. Criar a planilha

1. Acesse <https://sheets.new> e dê um nome, por exemplo
   **Prisma Empresarial — Contatos do site**.
2. Não precisa criar colunas: a aba **Contatos** é criada automaticamente no
   primeiro envio.

## 2. Colar o script

1. Na planilha, menu **Extensões → Apps Script**.
2. Apague o conteúdo do arquivo `Código.gs` e cole todo o conteúdo de
   [`docs/apps-script/leads.gs`](apps-script/leads.gs).
3. (Opcional) Para receber um e-mail a cada contato, preencha
   `NOTIFY_EMAIL` no começo do script, por exemplo
   `const NOTIFY_EMAIL = 'nome@suaempresa.com.br';`.
4. Clique em **Salvar** (ícone de disquete).

## 3. Testar o script

1. Na barra de cima do editor, escolha a função **testar** e clique em
   **Executar**.
2. Na primeira vez, o Google pede autorização: **Revisar permissões** →
   escolha a conta → se aparecer "O Google não verificou este app", clique em
   **Avançado → Acessar (não seguro)** → **Permitir**. O aviso aparece porque o
   script é seu e não passou por revisão do Google; ele só acessa esta
   planilha (e o envio de e-mail, se configurado).
3. Volte à planilha: deve existir a aba **Contatos** com uma linha "Teste".
   Pode apagar essa linha.

## 4. Publicar como Web App

1. No editor do Apps Script: **Implantar → Nova implantação**.
2. Em **Selecionar tipo** (engrenagem), escolha **App da Web**.
3. Preencha:
   - **Descrição:** `Formulário do site`
   - **Executar como:** **Eu** (sua conta)
   - **Quem pode acessar:** **Qualquer pessoa**
4. Clique em **Implantar** e copie a **URL do app da Web** (termina em
   `/exec`).

"Qualquer pessoa" significa que o site pode enviar contatos para o script; ninguém
consegue ler a planilha por essa URL, porque o script só grava.

## 5. Ligar o site à planilha

Envie a URL copiada para quem cuida do site. Ela vai em `src/config.js`:

```js
export const leadsEndpoint = 'https://script.google.com/macros/s/XXXXXXXX/exec';
```

Depois do deploy, envie um contato de teste pelo site e confira a planilha.

## Se alterar o script depois

Mudanças no script só valem depois de uma nova versão da implantação:
**Implantar → Gerenciar implantações → ✏️ (editar) → Versão: Nova versão →
Implantar**. A URL continua a mesma. (Criar uma *nova implantação* gera uma URL
diferente, que teria de ser trocada no site.)

## Observações

- **Spam:** o formulário tem um campo invisível que só robôs preenchem; esses
  envios são descartados.
- **LGPD:** a planilha guarda dados pessoais. Restrinja o compartilhamento a
  quem atende os contatos. Antes de anunciar, o site deve ter uma política de
  privacidade e um aviso de consentimento no formulário (previsto junto com a
  landing page do LinkedIn).
- **Limites:** contas Google gratuitas comportam com folga o volume de um
  formulário de site; o aviso por e-mail tem limite de cerca de 100 e-mails/dia
  em contas gratuitas (1.500 no Google Workspace).
