import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-center/', // Your repo name here
  plugins: [react()]
})
