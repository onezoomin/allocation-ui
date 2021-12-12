import preactRefresh from '@prefresh/vite'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import WindiCSS from 'vite-plugin-windicss'

// import commonjsExternals from "vite-plugin-commonjs-externals"
// import {builtinModules} from 'module'
// import inject from '@rollup/plugin-inject'
// import nodeResolve from '@rollup/plugin-node-resolve'
// import nodePolyfills from 'rollup-plugin-polyfill-node'


// https://vitejs.dev/config/
export default defineConfig({
  // optimizeDeps: {
  //   exclude: builtinModules,
  //   // exclude: [
  //   //   'buffer',
  //   //   // 'bip32','tiny-secp256k1','@keplr-wallet/crypto','@cosmjs/stargate','@keplr-wallet/stores'
  //   // ],
  // },
  // build: {
  //   assetsDir: '.',
  //   rollupOptions: {
  //     output: {
  //       format: 'cjs'
  //     },
  //     external: builtinModules
  //   },
  // },
  // build: {
  //   commonjsOptions: {},
  //   // or empty commonjsOptions: {}
  // },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    target: 'esnext',
    // define: {
    //   'Buffer': 'Buffer'
    // }
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
    // nodeResolve({
    //   browser: true,
    //   preferBuiltins: false,
    // }),
    // commonjsExternals({
    //   externals: builtinModules,
    // }),
    preactRefresh(),
    VitePWA(),
    WindiCSS({ safelist: 'prose prose-sm m-auto' }),
    // inject({ Buffer: ['buffer', 'Buffer'] }),
    // inject({
    //   include: [
    //     'node_modules/@ledgerhq/**',
    //     'node_modules/@keplr-wallet/**',
    //     'node_modules/tiny-secp256k1',
    //   ],
    //   modules: { Buffer: ['buffer', 'Buffer'] },
    // }),
  ],
  define: {
    'process.env': process?.env || {}, // needed in addition to nodePolyfills
    // 'globalThis.Buffer': Buffer, // needed in addition to nodePolyfills
    // Buffer, // needed in addition to nodePolyfills
  },
})
