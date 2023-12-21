import { defineConfig } from "vite";
import path from "path";
import inspect from "vite-plugin-inspect";
import loader from "@honeyjs/vite-loader";
import xite from "xite/plugin";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    minify: false,
    emptyOutDir: true,
    manifest: true
  },
  resolve: {
    alias: {
      "#src": path.resolve("src")
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: 'import { h, Fragment } from "@honeyjs/dom/jsx-runtime"'
  },
  plugins: [
    xite(),
    inspect(),
    loader({
      effect: "import { createEffect } from '@honeyjs/dom'",
    }),
  ],
  server: {
    host: true
  }
});