import preactRefresh from '@prefresh/vite'
import nodeResolve from '@rollup/plugin-node-resolve'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  // optimizeDeps: {
  //   include: [],
  // },
  // build: {
  //   commonjsOptions: {},
  //   // or empty commonjsOptions: {}
  // },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    target: 'es2020',
  },
  resolve: {
    alias: [
      { find: 'react', replacement: 'preact/compat' },
      { find: 'react-dom', replacement: 'preact/compat' },
      // Not necessary unless you consume a module using `createClass`
      { find: 'create-react-class', replacement: 'preact-compat/lib/create-react-class' },
      // Not necessary unless you consume a module requiring `react-dom-factories`
      { find: 'react-dom-factories', replacement: 'preact-compat/lib/react-dom-factories' },
    ],
  },
  plugins: [
    nodePolyfills(),
    nodeResolve({
      preferBuiltins: false,
    }),
    preactRefresh(),
    VitePWA(),
    WindiCSS({ safelist: 'prose prose-sm m-auto' }),
  ],
  // define: {
  //   'process.env': process?.env || {}, // alternate to nodePolyfills
  // },
})
