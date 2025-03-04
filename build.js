import esbuild from 'esbuild';

esbuild.build({
    entryPoints: ['./src/compileComponents.tsx'], // Adjust path
    outfile: 'css_dist/compileComponents.js',
    bundle: true,
    platform: 'node',
    format: 'esm',  // If using CommonJS, switch to 'cjs'
    sourcemap: true,
    external: ['react', 'react-dom', 'react-dom/server', 'styled-components'], // Exclude these
}).then(() => {
    console.log('✅ Build successful! Run: node css_dist/compileComponents.js');
}).catch(() => process.exit(1));
