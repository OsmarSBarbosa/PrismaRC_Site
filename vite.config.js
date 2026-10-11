import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: o site é publicado na raiz do domínio próprio https://prismarc.com.br/
// (GitHub Pages com domínio personalizado). Ver docs/DOMINIO-PRISMARC.md.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
