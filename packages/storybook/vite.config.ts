import { defineConfig } from 'vite'

import { getParentDir, vitestAlias } from '../tools/src/utils'
import { CreateFilter, VitePlugin, createFilter as createFilter$ } from '../tools/src/plugin'

import { join } from 'node:path'

import angular from '@analogjs/vite-plugin-angular'

import { createFilter as $createFilter } from '@rollup/pluginutils'

const createFilter = () => {
  const filter = createFilter$()
  const criteria = (path: string) => join(__dirname, path)

  const include = criteria('../elements')
  const exclude = [ 
    './stories/**/*.ts', 
    '../pages/**/*.ts',
    '../components/**/*.ts'
  ]
  
  return {
    tsFilter: (id) => {
      const value = filter.tsFilter?.(id, {
        include: join(include, '**/*.ts'),
        exclude: exclude.map(e => criteria(e))
      })
      return value
    },
    cssFilter: (id) => {
      const filter = $createFilter(
        join(include, '**/*.scss?inline')
      )
      return filter(id)
    }
  } as CreateFilter
}

export default defineConfig({
  publicDir: 'src/assets',
  build: {
    target: ['es2020']
  },
  resolve: {
    mainFields: [ 'module' ],
    alias: vitestAlias(getParentDir('packages/storybook'))
  },
  plugins: [
    {
      name: 'watcher',
      configureServer({ watcher, hot }) {
        watcher.on('change', (path: string) => {
          hot.send({ type: 'full-reload', path })
        })
      }
    },
    VitePlugin({
      styles: {
        createFilter,
        superClass: 'CustomElement'         
      },
      css: {
        createFilter,
        importPackage: '@lithium/elements/core'
      }
    }),
    angular({ 
      jit: true,
      tsconfig: join(process.cwd(), 'tsconfig.json'),
      inlineStylesExtension: 'scss',
      transformFilter(_, id) {
        const { tsFilter, cssFilter } = createFilter()
        if (tsFilter?.(id) || cssFilter?.(id)) {
          return false
        }
        return true
      }
    }),
    {
      name: '@storybook/angular',
      transform(code: string) {
        if (code.includes('"@storybook/angular"')) {
          return code.replace(/\"@storybook\/angular\"/g, '\"@storybook/angular/dist/client\"')
        }
        return
      }
    }
  ],
  define: {
    'process.env.FORCE_SIMILAR_INSTEAD_OF_MAP': 'false'
  }
})