import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mindang_portfolio/',
  assetsInclude: ['**/*.JPG', '**/*.PNG', '**/*.GIF', '**/*.WEBP'],
})
