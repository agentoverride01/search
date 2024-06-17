import type { SwcOptions } from './types'
import { transformSync } from '@swc/core'

export const swcTransformer = (code: string, id: string, options?: SwcOptions) => {
  const { paths, plugins, baseUrl } = options ?? {}
  const result = transformSync(code, {
    jsc: {
      parser: {
        syntax: 'typescript',
        decorators: true,
        dynamicImport: true,
        tsx: true
      },
      target: 'es2022',
      ...(baseUrl ? { baseUrl }: {}),
      ...(paths ? { paths  }: {})
    },
    filename: id,
    sourceMaps: true,
    isModule: true,
    plugin: (program) => {
      plugins?.forEach(plugin => plugin(program))
      return program
    }
  })
  return result  
}