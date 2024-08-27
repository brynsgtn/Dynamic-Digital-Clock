import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['dayjs', 'micromodal']
  },
  base: '',
  build: {
    outDir: 'dist'
  }
});
