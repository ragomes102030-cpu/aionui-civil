import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites from /<repo>/, so built asset URLs need that prefix.
// Set VITE_BASE='/' for local preview or a custom domain.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/aionui-civil/',
  plugins: [react()],
})
