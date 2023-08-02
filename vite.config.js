import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';
import tsconfigPaths from 'vite-tsconfig-paths';
import { NodeGlobalsPolyfillPlugin } from 'esbuild-plugins/node-globals-polyfill';
import svgrPlugin from 'vite-plugin-svgr'; // Correct import name

export default defineConfig({
  envPrefix: 'REACT_APP_',
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
  plugins: [
    react(),
    envCompatible(),
    tsconfigPaths(),
    svgrPlugin({ // Correct plugin name
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
