import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgrPlugin from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
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
        format: 'cjs',
        sourcemap: true,
        interop: 'auto',
        inlineDynamicImports: false,
        preserveModules: true,
      },
    },
  },
})
