// Design tokens — identidade visual Prisma Empresarial.
// Baseado na marca: losango azul-marinho + wordmark preto.
// Atualize aqui para refletir em todo o projeto.

export const colors = {
  // Primárias — azul-marinho da marca
  primary: '#283A6B',
  primaryLight: '#3A5089',
  primaryDark: '#1B2547',

  // Acento — azul claro (usado em destaques: "FUTURO", "COMPLETA")
  accent: '#3E86C9',
  accentLight: '#5AA0E0',

  // Neutros
  black: '#1A1A1A',
  white: '#FFFFFF',
  offWhite: '#F5F6F8',
  gray100: '#ECEEF2',
  gray300: '#CBD0DA',
  gray500: '#8A91A1',
  gray700: '#4A5160',

  // Feedback
  success: '#2E9E5B',
  warning: '#E0A615',
  error: '#D64545',
};

export const fonts = {
  heading: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
  body: "'Inter', 'Helvetica Neue', Arial, sans-serif",
};

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
};

export const spacing = {
  section: '5rem', // padding vertical entre seções
  container: '1180px', // largura máxima do conteúdo
  gutter: '1.5rem', // padding lateral em mobile
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '16px',
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 3px rgba(27, 37, 71, 0.12)',
  md: '0 6px 18px rgba(27, 37, 71, 0.12)',
  lg: '0 14px 40px rgba(27, 37, 71, 0.16)',
};
