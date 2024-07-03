import { defineConfig } from 'vite';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    module: 'ESNext',
    outDir: 'dist',
    assetsDir: 'assets',
  },
  base: '',
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      interfaces: path.resolve(__dirname, 'src/interfaces'),
      atoms: path.resolve(__dirname, 'src/components/atoms'),
      elements: path.resolve(__dirname, 'src/components/elements'),
      configs: path.resolve(__dirname, 'src/configs'),
      controllers: path.resolve(__dirname, 'src/controllers'),
      managers: path.resolve(__dirname, 'src/managers'),
      stages: path.resolve(__dirname, 'src/stages'),
    },
  },
  optimizeDeps: {
    include: ['pixi.js', 'pixi-particles'],
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'assets',
          dest: ''
        }
      ]
    })
  ]
});
