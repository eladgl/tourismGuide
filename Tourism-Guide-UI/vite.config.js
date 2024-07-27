import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
import { fileURLToPath, URL } from "url";

console.log("SVG Icons Path:", path.resolve(process.cwd(), "src/assets/icons"));

export default defineConfig({
  build: {
    outDir: "dist/assets",
    rollupOptions: {
      input: "./src/main.jsx", // Entry point for the build
      output: {
        entryFileNames: "[name]-[hash].js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "[name]-[hash].[ext]",
      },
    },
  },
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "[name]",
    }),
    react({
      babel: {
        plugins: [["babel-plugin-styled-components", { displayName: true }]],
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@access",
        replacement: fileURLToPath(new URL("./src/access", import.meta.url)),
      },
    ],
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
