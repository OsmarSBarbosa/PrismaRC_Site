// Resolve o caminho de um asset em public/ respeitando o base do Vite.
// Em produção (GitHub Pages) o base é /prisma-loteamentos/, então
// asset('brand/logo.png') => /prisma-loteamentos/brand/logo.png
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
