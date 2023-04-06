import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // comes from types/node that we installed

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // whenever @ occurs, it will be replaced with current directory folder with src added to it
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src")}]
  }
})
