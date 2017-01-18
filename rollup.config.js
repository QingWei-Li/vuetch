import buble from 'rollup-plugin-buble'

export default {
  entry: 'src/index.js',
  plugins: [buble()],
  moduleName: 'Vuetch',
  targets: [
    { dest: 'dist/vuetch.common.js', format: 'cjs' },
    { dest: 'dist/vuetch.js', format: 'umd' },
    { dest: 'dist/vuetch.es5.js', format: 'es' }
  ]
}
