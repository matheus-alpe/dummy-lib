import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleInject from "@senojs/rollup-plugin-style-inject";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "src", "components", "index.ts"),
      name: "DummyLib",
      fileName: (format) => `dummy-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    sourcemap: true,
  },

  plugins: [vue(), styleInject()],
});
