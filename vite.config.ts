import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/thermostat-horseshoe-card.ts",
      formats: ["es"],
      fileName: () => "thermostat-horseshoe-card.js"
    },
    outDir: "dist"
  }
});
