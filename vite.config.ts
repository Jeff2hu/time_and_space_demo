import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@Api": "/src/api",
      "@Component": "/src/component",
      "@Zustand": "/src/zustand",
      "@HelperFn": "/src/helperFn",
      "@Type": "/src/type",
    },
  },
});
