import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        popup: resolve(__dirname, "src/popup.html"),
      },
      // output: {
      //   entryFileNames: "[name].html",
      //   assetFileNames: "[name].[hash].[ext]",
      //   chunkFileNames: "[name].[hash].js",
      // },
    },
  },
});
