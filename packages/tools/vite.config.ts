import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: 'src/assets',
  build: {
    target: ['es2020']
  },
  resolve: {
    mainFields: [ 'module' ]
  },
  define: {
    'process.env.FORCE_SIMILAR_INSTEAD_OF_MAP': 'false'
  }
})