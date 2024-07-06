import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
import { fileURLToPath, URL } from "url";

console.log("SVG Icons Path:", path.resolve(process.cwd(), "src/assets/icons"));

export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "[name]",
    }),
    react(),
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
  server: {
    watch: {
      usePolling: true,
      file: [
        "src/**/*.html",
        "src/**/*.css",
        "src/**/*.js",
        "src/**/*.jsx",
        "src/**/*.ts",
        "src/**/*.tsx",
      ],
    },
  },
});
