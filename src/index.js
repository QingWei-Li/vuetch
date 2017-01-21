import Vuetch from './vuetch'

Vuetch.install = function (Vue, opts = {}) {
  Vuetch.defaultOptions = opts.options
  Vuetch.props.defaultData.default = () => opts.defaultData
  Vuetch.onerror = opts.onerror
  Vuetch.onsuccess = opts.onsuccess
  Vuetch.oncomplete = opts.oncomplete

  Vue.component(Vuetch.name, Vuetch)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuetch.install)
}

export default Vuetch
