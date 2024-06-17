import type { 
  BundlePluginOptions, 
  ElementSuperClass, 
  PluginOptions, 
  SwcOptions, 
  TransformStyleOptions, 
  VitePluginOptions 
} from './types'

import { 
  InlineStyle, 
  RewriteImportStyle, 
  StyleClassStatement, 
  TransformStyle 
} from './ast-transform'

import { createFilter } from './utils'
import { transformCss } from './css-transformer'
import { swcTransformer } from './swc-tranformer'

const createPluginOptions  = (options?: BundlePluginOptions) => {
  const { styles = {}, css = {}, swc = {}, inline = {} } = options ?? {}
  const merge = (opts: PluginOptions) => ({ ...opts, ...swc })
  return { styles: merge(styles), css: merge(css), inline: merge(inline) }
}

const BundleStylePlugin = () => {
  const { cssFilter } = createFilter()
  return {
    name: 'styles',
    enforce: 'pre',
    transform(code: string, id:  string) {
      if (cssFilter?.(id)) {
        return transformCss(code, id, {
          style: 'compressed'
        })
      }
      return
    }
  }
}

const StylePlugin  = (options?: PluginOptions & SwcOptions & ElementSuperClass)  =>  {
  const { tsFilter } = createFilter()
  const filter = options?.createFilter?.()
  return  {
    name: 'styles',
    enforce: 'pre',
    transform(code: string, id:  string) {
      if (filter?.tsFilter ? filter.tsFilter(id): tsFilter?.(id)) {
        const result = swcTransformer(code,  id, {
          plugins: [ RewriteImportStyle(options), StyleClassStatement(options) ],
          baseUrl: options?.baseUrl,
          paths: options?.paths
        })

        return result
      }
      return
    }
  }
}

const CssPlugin = (options?: PluginOptions & TransformStyleOptions & SwcOptions)  => {
  const { cssFilter } = createFilter()
  const filter = options?.createFilter?.()
  return  {
    name: 'css',
    enforce: 'post',
    transform(code: string, id: string) {
      const file = id.split('?')[0]
      if (!(filter?.cssFilter ? filter.cssFilter(file): cssFilter?.(file))) return
      return swcTransformer(code, id, {
        plugins: [ TransformStyle(options) ],
        baseUrl: options?.baseUrl,
        paths: options?.paths
      })
    }
  }
}

const InlineCssPlugin = (options?: PluginOptions & SwcOptions) => {
  const { tsFilter } = createFilter()
  const filter = options?.createFilter?.()
  return {
    name: 'css',
    enforce: 'post',
    transform(code: string, id: string) {
      if (!(filter?.tsFilter ? filter.tsFilter(id): tsFilter?.(id))) return
      return swcTransformer(code, id, {
        plugins: [ InlineStyle() ],
        baseUrl: options?.baseUrl,
        paths: options?.paths
      })
    }
  }
}

export const BundlePlugin = <T>(options?: BundlePluginOptions) => {
  const { styles, css } = createPluginOptions(options)
  return [ StylePlugin(styles), BundleStylePlugin(), CssPlugin(css) ] as T[]
}

export const VitePlugin = <T>(options?: VitePluginOptions) => {
  const { styles, css, inline } = createPluginOptions(options)
  return [ StylePlugin(styles), InlineCssPlugin(inline), CssPlugin(css) ] as T[]
}