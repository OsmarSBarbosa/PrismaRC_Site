# Prisma Empresarial — Site institucional

Landing page do **Prisma Empresarial**, loteamento industrial planejado em
Rio Claro/SP (indústria, comércio e serviços). Construída em React + Vite.

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (dist/)
npm run preview  # pré-visualiza o build
```

## Estrutura

- `src/i18n/pt-BR.js` — **todo o conteúdo de texto** (pt-BR) e dados de contato.
  Edite aqui para alterar títulos, descrições, telefone, e-mail, etc.
- `src/styles/tokens.js` + `src/index.css` — design tokens da marca
  (azul-marinho `#283A6B` + preto), tipografia (Montserrat / Inter) e
  utilitários globais (`.container`, `.section`, `.btn`).
- `src/components/*` — cada seção tem seu `.jsx` + `.css`:
  Navbar, Hero, Tagline, About, Features, Location, InteractivePlot, Gallery,
  WhatsAppCta, Contact, Footer, PrivacyNotice. Ícones em `src/components/Icon`.
- `src/utils/contact.js` — helpers de WhatsApp, Google Maps e telefone.
- `public/brand/` — logos, planta, mapa de acessos e imagens do empreendimento.

## Notas

- O site não tem formulário: o contato é pelo WhatsApp. Cada clique nos botões
  de WhatsApp/telefone é registrado numa planilha do Google, com um código de
  referência que também vai na mensagem (`src/utils/tracking.js`; instalação
  e colunas em `docs/LEADS-PLANILHA.md`).
- Páginas: `index.html` (site) e `privacidade/index.html` (Política de
  Privacidade). Dados do responsável e prazo de guarda em `src/config.js`.
- O número de WhatsApp/telefone está em `contactInfo` (`src/i18n/pt-BR.js`).
  Em uso: **(19) 99998-2692**.
