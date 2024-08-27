import { defineConfig } from 'vite';

export default defineConfig({
  // No need for plugins if you're not using React
  optimizeDeps: {
    include: ['dayjs', 'micromodal']
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
});
