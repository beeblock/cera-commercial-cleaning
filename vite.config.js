import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { proposalApi } from "./server/vite-proposal-api.js";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    proposalApi(loadEnv(mode, process.cwd(), ["RESEND_", "CONTACT_"])),
  ],
  base: "./",
  server: {
    host: "127.0.0.1",
    port: 5187,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 4187,
    strictPort: true,
  },
}));
