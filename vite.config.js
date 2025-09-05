import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   allowedHosts: ["543cae86ffedf5.lhr.life"],
  //   host: true, // important for external access
  // },
});
