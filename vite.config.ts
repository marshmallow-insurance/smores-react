import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgrPlugin from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
    dts({
      entryRoot: './src',
      insertTypesEntry: true,
    }),
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
    ssr: true,
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
        preserveModules: true,
      },
    },
  },
})
