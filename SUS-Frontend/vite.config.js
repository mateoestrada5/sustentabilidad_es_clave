import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  define: {
    global: {}, // Definimos global como un objeto vacío
  },
});

