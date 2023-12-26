/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",

  optimizeDeps: {
    include: ["linked-dep"],
  },
  server: {
    port: 8080,
  },
  worker: {
    format: "es",
  },
  build: {
    target: "esnext",
    commonjsOptions: {
      include: [/linked-dep/, /node_modules/],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
});
