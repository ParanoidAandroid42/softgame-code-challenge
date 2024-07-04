import { defineConfig } from 'vite';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    module: 'ESNext',
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      external: ['pixi.js', 'pixi-filters', 'pixi-particles'],
      output: {
        globals: {
          'pixi.js': 'PIXI',
          'pixi-filters': 'PIXI.filters',
          'pixi-particles': 'PIXI.particles'
        }
      }
    }
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
      stages: path.resolve(__dirname, 'src/stages')
    }
  },
  optimizeDeps: {
    include: ['pixi.js', 'pixi-particles', 'pixi-filters']
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'assets',
          dest: ''
        },
      ]
    })
  ]
});
