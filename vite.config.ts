import { optimizeLodashImports } from "@optimize-lodash/rollup-plugin";
import react from "@vitejs/plugin-react-swc";
// import react from "@vitejs/plugin-react";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  base: "/vite-template-awesome-soho",
  plugins: [
    react(),
    tsconfigPaths(),
    optimizeLodashImports({ useLodashEs: true }),
    splitVendorChunkPlugin(),
  ],
  // optimizeDeps: {
  //   disabled: false,
  // },
  logLevel: "info",
  server: {
    port: 3000,
    strictPort: true,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
