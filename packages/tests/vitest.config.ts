/// <reference types="vitest" />

import { defineConfig, loadEnv } from 'vite'
import { join } from 'node:path'

import angular from '@analogjs/vite-plugin-angular'

import { getParentDir, hasEnvFile, vitestAlias } from '../tools/src/utils'

export default defineConfig(({ mode }) => {
  if (hasEnvFile(mode)) {
    Object.assign(process.env, loadEnv(mode, process.cwd()))
  }
  return {
    resolve: {
      mainFields: ['module'],
      alias: vitestAlias(getParentDir('packages/tests'))
    },
    plugins: [
      angular({
        tsconfig: join(__dirname, 'tsconfig.spec.json'),
        inlineStylesExtension: 'scss'
      })
    ],            
    test: {
      globals: true,      
      setupFiles: [ join(__dirname, './src/test-setup.ts') ],
      include: [ './**/*.{test,spec}.{js,ts,jsx,tsx}' ],
      reporters: [ 'basic' ],
      coverage: {
        provider: 'v8',
        allowExternal: true,
        cleanOnRerun: true,
        reporter: [ 'lcov', 'html', 'text' ]
      },
      environment: 'happy-dom',
      disableConsoleIntercept: true      
    }
  }
})
