import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

// import { dirname, join, resolve } from 'path'
// const basePath = dirname(resolve(__dirname));

export default defineConfig({
  attributify: true,
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.jsx', './src/**/*.js', './src/**/*.ts', './src/**/*.tsx'],
  },
  theme: {
    extend: {
      fontWeight: ['hover', 'focus'],
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
  variants: {},
  plugins: [formsPlugin],
})
