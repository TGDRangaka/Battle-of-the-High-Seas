// vite.config.js
import { defineConfig } from 'vite';
import inject from "@rollup/plugin-inject";

export default defineConfig(
  {
    plugins: [
      inject({
        $: 'jquery',
        jQuery: 'jquery',
      })
    ],
    base: '/Battle-of-the-High-Seas/', // 'repo-name'
  });