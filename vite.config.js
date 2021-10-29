import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import md from "vite-plugin-react-md";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  // base:
  //   process.env.NODE_ENV === "production"
  //     ? "/curriculum/" // prod
  //     : "/", // dev
  plugins: [
    react(),
    md(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "img/favicon.ico",
        "img/avatar.jpeg",
        "robots.txt",
        "apple-touch-icon.png",
        "img/logo.svg",
        "fonts/ubuntu.woff2",
      ],
      manifest: {
        name: "Mi Landing Page",
        short_name: "Landing Page",
        description: "Mi Landing Page",
        theme_color: "#2377ff",
        background_color: "#2377ff",
        icons: [
          {
            src: "icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        start_url: ".",
        // scope: 'https://emarifer.github.io/curriculum/',
        display: "standalone",
      },
    }),
  ],
});
