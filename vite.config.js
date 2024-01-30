import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // src/index.ts is where we have exported the component(s)
      emptyOurDist: false,
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueReusableComponents",
      formats: ["es"],
      // the name of the output files when the build is run
      fileName: "vue-reusable-components",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
