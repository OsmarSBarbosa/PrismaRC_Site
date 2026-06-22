import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: o site é publicado em https://osuricato.github.io/prisma-loteamentos/
// (GitHub Pages — project page), por isso os assets precisam desse prefixo.
export default defineConfig({
  base: '/prisma-loteamentos/',
  plugins: [react()],
})
