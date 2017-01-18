import Vuetch from './core'

Vuetch.install = function install (Vue, options) {
  Vuetch.options = options
  Vue.component(Vuetch.name, Vuetch)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default Vuetch
