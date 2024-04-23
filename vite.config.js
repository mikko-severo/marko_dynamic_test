import { defineConfig } from "vite";
import marko from "@marko/vite";
import dynamicImport from 'vite-plugin-dynamic-import';
import { resolve } from 'path';


export default defineConfig({
  plugins: [marko(),dynamicImport(/* options */)],
  build: {
    sourcemap: true, // Generate sourcemaps for all builds.
    emptyOutDir: false, // Avoid server & client deleting files from each other.
  },
  // resolve: {
  //   alias: {
  //     'src': resolve(__dirname, './src')
  //   }
  // }
});
