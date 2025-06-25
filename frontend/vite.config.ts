import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    allowedHosts: [
      'ec2-3-144-27-179.us-east-2.compute.amazonaws.com',
      'localhost',
    ],
    strictPort: true,
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8888/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});