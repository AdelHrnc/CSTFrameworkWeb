import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages served at https://<user>.github.io/CSTFrameworkWeb/
  base: '/CSTFrameworkWeb/',
})
