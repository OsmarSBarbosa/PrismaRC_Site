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
  InterestForm, Contact, Footer. Ícones em `src/components/Icon`.
- `src/utils/contact.js` — helpers de WhatsApp, Google Maps e telefone.
- `public/brand/` — logos, planta, mapa de acessos e imagens do empreendimento.

## Notas

- O formulário de interesse não tem backend: o envio compõe uma mensagem e
  abre o WhatsApp do consultor. Para integrar um backend/CRM, ajuste
  `handleSubmit` em `src/components/InterestForm/InterestForm.jsx`.
- O número de WhatsApp/telefone está em `contactInfo` (`src/i18n/pt-BR.js`).
  Em uso: **(19) 92508-3792** (número do material de divulgação/outdoor).
