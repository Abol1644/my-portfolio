import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Tisheh Manager',
        short_name: 'Manager',
        start_url: "/",
        scope: "/",
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#fbb800',
        // icons: [
        //   {
        //     src: 'pwa-icon-192.png',
        //     sizes: '192x192',
        //     type: 'image/png'
        //   },
        //   {
        //     src: 'pwa-icon-512.png',
        //     sizes: '512x512',
        //     type: 'image/png'
        //   }
        // ],
        // screenshots: [
        //   {
        //     src: 'screenshot-mobile.png',
        //     sizes: '540x960',
        //     type: 'image/png',
        //     form_factor: 'narrow'
        //   },
        //   {
        //     src: 'screenshot-desktop.png',
        //     sizes: '1280x720',
        //     type: 'image/png',
        //     form_factor: 'wide'
        //   }
        // ]
      },
      includeAssets: ['**/*'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  base: '/my-portfolio/',
})