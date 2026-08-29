import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Vercel serve situs ini dari root domain ("/"), tapi GitHub Pages
  // (project site) serve dari subpath "/portofolioakmal/". Workflow
  // GitHub Actions set DEPLOY_TARGET=gh-pages saat build khusus buat
  // GitHub Pages; build lain (termasuk Vercel) tetap pakai root.
  base: process.env.DEPLOY_TARGET === 'gh-pages' ? '/portofolioakmal/' : '/',
})
