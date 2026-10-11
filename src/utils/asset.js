// Resolve o caminho de um asset em public/ respeitando o base do Vite.
// Em produção (GitHub Pages) o base é /PrismaRC_Site/, então
// asset('brand/logo.png') => /PrismaRC_Site/brand/logo.png
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
