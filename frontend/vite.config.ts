import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: false,
    },
    host: true,
    allowedHosts: [
      'ec2-18-118-16-84.us-east-2.compute.amazonaws.com',
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