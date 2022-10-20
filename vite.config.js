import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import postcss from "./postcss.config.js";

export default defineConfig({
  plugins: [svelte()],
  css: {
    postcss,
  },
  optimizeDeps: {
    include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
  }
});
