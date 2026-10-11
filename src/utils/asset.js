// Resolve o caminho de um asset em public/ respeitando o base do Vite.
// Com o site na raiz do domínio (base '/'):
// asset('brand/logo.png') => /brand/logo.png
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
