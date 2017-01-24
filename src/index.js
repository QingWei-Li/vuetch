import Vuetch from './vuetch'

Vuetch.install = function (Vue, opts = {}) {
  Vuetch.defaultOptions = opts.defaultOptions
  Vuetch.props.defaultData.default = () => opts.defaultData
  Vuetch.props.http.default = opts.http
  Vuetch.onerror = opts.onerror
  Vuetch.onsuccess = opts.onsuccess
  Vuetch.oncomplete = opts.oncomplete

  Vue.component(Vuetch.name, Vuetch)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuetch.install)
}

export default Vuetch
