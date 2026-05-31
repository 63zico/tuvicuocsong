import { defineConfig } from "vite";
import zaloMiniApp from "zmp-vite-plugin";

export default defineConfig({
  base: "",
  plugins: [zaloMiniApp()],
  build: {
    assetsInlineLimit: 0,
    outDir: "dist",
  },
});
