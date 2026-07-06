import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://sarananusapakan.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    server: {
      host: "0.0.0.0",
      allowedHosts: "all",
      port: 4321, 
    },
  },
});