// vite.config.js
import { defineConfig } from 'vite';
import inject from "@rollup/plugin-inject";

export default defineConfig(
  {
    plugins: [
      inject({   // => that should be first under plugins array
        $: 'jquery',
        jQuery: 'jquery',
      })
    ],
    base: '/Battle-of-the-High-Seas/', // replace 'repo-name' with your repository name
  });