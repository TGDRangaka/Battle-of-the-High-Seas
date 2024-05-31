// vite.config.js
import { defineConfig } from 'vite';
import inject from "@rollup/plugin-inject";
import { resolve } from 'path';

export default defineConfig(
  {
    plugins: [
      inject({
        $: 'jquery',
        jQuery: 'jquery',
      })
    ],
    base: '/Battle-of-the-High-Seas/', // 'repo-name'
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          game: resolve(__dirname, 'src/pages/game-view.html')
        }
      }
    }
  });