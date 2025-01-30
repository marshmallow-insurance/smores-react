import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgrPlugin from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
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
    sourcemap: true,
  },
})
