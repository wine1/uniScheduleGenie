import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from "path";
function resolve(dir) {
  return path.join(__dirname, dir);
}
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      "@": resolve("pages"),
    },
  },
  server: {
    port: 3001,
    open: true,
    proxy: {
      "/api": {
        target: "https://your.api.server",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
  build: {
    sourcemap: false,
    target: "modules",
  },
});