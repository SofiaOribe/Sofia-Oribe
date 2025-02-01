import { defineConfig } from "vitest/config" // IMPORTAR DESDE vitest/config
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    host: true,
  },
  build: {
    outDir: "build",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})

/* 

import { viteStaticCopy } from "vite-plugin-static-copy"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "OneSignalSDKWorker.js", dest: "./" },
        { src: "updateWorker.js", dest: "./" },
        { src: "version.json", dest: "./" },
      ],
    }),
    {
      name: "configure-server",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/OneSignalSDKWorker.js") {
            res.setHeader("Content-Type", "application/javascript; charset=utf-8")
          }
          next()
        })
      },
    },
  ],
  //added from the original snippet from here to
  server: {
    open: false,
    host: "localhost",
    port: 80,
  },
  optimizeDeps: {
    include: ["@mui/material/Tooltip"],
    exclude: ["@types/react-google-recaptcha"], // Exclude the problematic package
  },
  //here

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
    outDir: "build", //added from the original snippet
    rollupOptions: {
      output: {
        manualChunks: path => path.split("/").reverse()[path.split("/").reverse().indexOf("node_modules") - 1],
      },
    },
  },
})

*/
