import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages menaruh project site di subpath /<nama-repo>/,
  // jadi semua path asset harus disesuaikan ke situ.
  base: '/portofolioakmal/',
})
