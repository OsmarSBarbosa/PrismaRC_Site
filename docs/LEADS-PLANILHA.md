# Registrar os cliques de WhatsApp e telefone no Google Planilhas

O site não tem formulário: o contato acontece pelo WhatsApp. **Cada clique** em
um botão de WhatsApp ou de telefone grava uma linha na aba **Cliques** de uma
planilha do Google, e o WhatsApp abre com a mensagem pronta.

Cada clique recebe um **código de referência** (ex.: `PR-7K3F`) que vai na
planilha **e** no fim da mensagem do WhatsApp (`Ref: PR-7K3F`). Quando a
mensagem chega, procure o código na planilha para saber de onde a pessoa veio.

## O que é gravado

| Grupo | Colunas |
|---|---|
| Clique | Data/hora, Código, Tipo (whatsapp/telefone), Botão, Página |
| Localização (pelo IP, aproximada) | Cidade, Estado, País, CEP, Latitude, Longitude, Operadora, Organização da rede, IP |
| Origem | Origem (site anterior), utm_source/medium/campaign/content/term, li_fat_id (LinkedIn), gclid (Google), fbclid (Meta), Página de entrada, Referrer completo |
| Dispositivo | Dispositivo, Sistema, Navegador, Tela, Idioma, Fuso horário (aparelho e IP), User agent |
| Comportamento | Tempo na página, Tempo no site, Rolagem máx. (%), Seções vistas |
| Visitante | Visitante (identificador aleatório), Nº de visitas, Primeira visita |

Botões registrados (`Botão`): `menu`, `flutuante`, `lotes`, `fale-conosco`,
`contato`, e os de telefone `fale-conosco-telefone`, `contato-telefone`,
`rodape-telefone`.

**Sobre a localização:** vem do serviço gratuito [ipwhois.io](https://ipwhois.io)
(1.000 consultas por dia para o site todo; a consulta é feita uma vez por
visita, na primeira interação). É aproximada: em internet móvel, costuma
indicar a cidade da central da operadora. Se o serviço não responder em 2 s,
a linha é gravada com `Cidade = indisponível`.

> Os dados coletados estão descritos na Política de Privacidade do site
> (`/privacidade/`). Se mudar o que é coletado, atualize a política.

---

## Instalação (primeira vez)

1. Crie uma planilha em <https://sheets.new>.
2. Menu **Extensões → Apps Script**. Apague o conteúdo de `Código.gs` e cole o
   conteúdo de [`docs/apps-script/leads.gs`](apps-script/leads.gs).
3. Clique em **Salvar**.
4. Escolha a função **testar** e clique em **Executar**. Na autorização, se
   aparecer "O Google não verificou este app": **Avançado → Acessar (não
   seguro) → Permitir**. O script é seu; a primeira linha (`@OnlyCurrentDoc`)
   limita o acesso a **esta** planilha.
5. Confira a aba **Cliques** com a linha `PR-TEST` (pode apagar).
6. **Implantar → Nova implantação → App da Web**: Executar como **Eu**; Quem
   pode acessar **Qualquer pessoa** → **Implantar**. Copie a URL (termina em
   `/exec`) e coloque em `src/config.js` (`leadsEndpoint`).

## Atualizar o script (instalação já existente)

Use quando este arquivo `leads.gs` mudar:

1. Na planilha, **Extensões → Apps Script**; substitua todo o código pelo novo
   e clique em **Salvar**.
2. Rode **testar** uma vez (pode pedir autorização de novo) e confira a aba
   **Cliques**.
3. **Implantar → Gerenciar implantações → ✏️ (editar) → Versão: Nova versão →
   Implantar.** A URL continua a mesma; não é preciso mudar o site.

> **Não** use "Nova implantação" para atualizar: ela gera outra URL e o site
> para de gravar até a URL ser trocada em `src/config.js`.

## Observações

- **Clique não é mensagem enviada:** a planilha registra quem clicou. Quem de
  fato enviou a mensagem aparece no WhatsApp com o código `Ref: PR-XXXX`.
- **Aviso por e-mail (opcional):** preencha `NOTIFY_EMAIL` no começo do script
  para receber um e-mail por clique (limite de ~100 e-mails/dia em contas
  gratuitas).
- **Privacidade:** a planilha guarda dados pessoais (IP, localização, código
  que liga ao telefone). Compartilhe só com quem atende os contatos e apague
  registros com mais de 24 meses (prazo informado na Política de Privacidade).
