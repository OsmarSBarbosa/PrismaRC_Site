import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: o site é publicado em https://osmarsbarbosa.github.io/PrismaRC_Site/
// (GitHub Pages — project page), por isso os assets precisam desse prefixo.
// Ao ativar o domínio prismarc.com.br passa a ser '/' (docs/DOMINIO-PRISMARC.md).
export default defineConfig({
  base: '/PrismaRC_Site/',
  plugins: [react()],
})
