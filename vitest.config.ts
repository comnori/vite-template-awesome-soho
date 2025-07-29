import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      // Use Vitest defaults for exclusion (node_modules, dist, etc.)
    },
  }),
);
