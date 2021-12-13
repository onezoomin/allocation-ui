import preactRefresh from '@prefresh/vite'
import { execSync } from 'child_process'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import WindiCSS from 'vite-plugin-windicss'

// import commonjsExternals from "vite-plugin-commonjs-externals"
// import {builtinModules} from 'module'
// import inject from '@rollup/plugin-inject'
// import nodeResolve from '@rollup/plugin-node-resolve'
// import nodePolyfills from 'rollup-plugin-polyfill-node'
let RPC_URL, LCD_URL
try {
  RPC_URL = execSync('gp url 26657').toString().trim()
  LCD_URL = execSync('gp url 1317').toString().trim()
} catch (e) {
  console.log('not in gitpod')
}
const port = RPC_URL ? 443 : 3000

process.env.RPC_URL = RPC_URL ?? 'http://127.0.0.1:26657'
process.env.LCD_URL = LCD_URL ?? 'http://127.0.0.1:1317'

// const RPC_URL = process.env.GITPOD  || 'http://127.0.0.1:26657'
// const LCD_URL = process.env.GITPOD || 'http://127.0.0.1:1317'

console.log(port, process.env.RPC_URL, process.env.LCD_URL)

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
    // 'RPC_URL': RPC_URL,
    // 'LCD_URL': LCD_URL,
    // 'globalThis.Buffer': Buffer, // needed in addition to nodePolyfills
    // Buffer, // needed in addition to nodePolyfills
  },
  server: {
    hmr: {
      port,
    },
  },
})
