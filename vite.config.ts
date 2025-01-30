import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import svgrPlugin from 'vite-plugin-svgr'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => {
  return {
    base: 'test_base',
    build: {
      lib: {
        name: '@mrshmllw/smores-react',
        entry: resolve(__dirname, 'dist/index.js'),
      },
      outDir: 'dist',
      sourcemap: true,
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    plugins: [tsConfigPaths(), svgrPlugin()],
  }
})
