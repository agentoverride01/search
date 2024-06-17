/// <reference types="vitest" />

import { defineConfig } from 'vite'
import { getParentDir, vitestAlias } from '../tools/src/utils'
import { VitePlugin } from '../tools/src/plugin'

export default defineConfig({
  resolve: {
    mainFields: [ 'module' ],
    alias: vitestAlias(getParentDir('packages/elements'))
  },
  plugins: [ 
    VitePlugin({
      styles: {
        superClass: 'CustomElement'         
      },
      css: {
        importPackage: '@lithium/components/core'
      }
    }) 
  ],            
  test: {
    globals: true,
    include: [ './**/*.{test,spec}.{js,ts,jsx,tsx}' ],
    reporters: [ 'basic' ],
    coverage: {
      provider: 'v8',
      allowExternal: true,
      cleanOnRerun: true,
      reporter: [ 'lcov', 'html', 'text' ]
    },
    environment: 'jsdom',
    disableConsoleIntercept: true      
  }
})