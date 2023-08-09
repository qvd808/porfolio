import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { domain } from './domain'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `https://qvd808.github.io/${domain}`
})
