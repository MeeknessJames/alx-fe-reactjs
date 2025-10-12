import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Allow JSX inside .js files
export default defineConfig({
  plugins: [react({ include: "**/*.{jsx,js}" })],
});
