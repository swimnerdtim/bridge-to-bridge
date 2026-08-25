import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base is set for GitHub Pages project site deploy (repo name)
export default defineConfig({
  plugins: [react()],
  base: '/bridge-to-bridge/',
})
