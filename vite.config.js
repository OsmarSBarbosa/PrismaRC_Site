import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
// base: o site é publicado na raiz do domínio próprio https://prismarc.com.br/
// (GitHub Pages com domínio personalizado). Ver docs/DOMINIO-PRISMARC.md.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    // Páginas do site: cada uma vira uma pasta no deploy (ex.: /privacidade/).
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        privacidade: fileURLToPath(new URL('./privacidade/index.html', import.meta.url)),
        linkedin: fileURLToPath(new URL('./linkedin/index.html', import.meta.url)),
      },
    },
  },
})
