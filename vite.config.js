import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'movies-sync',
      formats: ['es', 'umd'],
      fileName: 'movies-sync'
    }
  }
});
