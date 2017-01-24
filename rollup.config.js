import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

let targets = [{ dest: 'dist/vuetch.js', format: 'umd' }]

if (process.env.BUILD) {
  targets = targets.concat([
    { dest: 'dist/vuetch.common.js', format: 'cjs' },
    { dest: 'dist/vuetch.es5.js', format: 'es' }
  ])
}

export default {
  entry: 'src/index.js',
  plugins: [buble(), nodeResolve(), commonjs()],
  moduleName: 'Vuetch',
  external: ['vue'],
  globals: {
    vue: 'Vue'
  },
  targets: targets
}
