// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import svgr from "vite-plugin-svgr";

// export default defineConfig({
//   plugins: [react(), svgr()],
//   resolve: {
//     alias: [{ find: "@", replacement: "/src" }],
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths"; // 👈

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()], // 👈 підключає alias-и з tsconfig
});
