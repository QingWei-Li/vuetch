import { assign } from './util'

export default {
  name: 'Vuetch',

  defaultOptions: {},

  props: {
    url: String, // The server URL
    options: Object, // HTTP config
    http: Function, // HTTP client
    defaultData: {}, // The default data before the request
    loop: { // polling
      type: [Boolean, Number],
      default: 1
    },
    delay: { // Load delay
      type: Number,
      default: 0
    },
    manual: Boolean,
    immediate: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  },

  data () {
    return {
      loading: false,
      data: this.defaultData,
      error: null
    }
  },

  watch: {
    loop: {
      immediate: true,
      handler (val) {
        this.counter = Number(typeof val === 'number')
      }
    }
  },

  created () {
    if (this.manual) return
    // start polling
    if (this.immediate) {
      this.load()
      clearTimeout(this.loopId)
    }
    this.polling()
  },

  methods: {
    load (cb) {
      this.loading = true
      const http = this.http || window.fetch

      http(this.url, assign({}, this.$options.defaultOptions, this.options))
        .then(result => result.json ? result.json() : result)
        .then(data => {
          this.loading = false
          this.data = data
          this.emit('onsuccess', data)
          this.emit('oncomplete')
          typeof cb === 'function' && cb()
        })
        .catch(error => {
          this.loading = false
          this.error = error
          this.emit('onerror', error)
          this.emit('oncomplete')
          typeof cb === 'function' && cb()
        })
    },

    polling () {
      clearTimeout(this.loopId)
      if (this.counter && this.counter++ > this.loop) return
      this.loopId = setTimeout(_ => this.load(this.polling), this.delay)
    },

    emit (event, data) {
      const fn = this.$options[event]

      typeof fn === 'function' && fn(event, data)
      this.$emit(event, data)
    }
  },

  render (h) {
    const slots = this.$scopedSlots.default
    const { data, error, loading, load, polling } = this
    const vnode = slots({ data, error, loading, $load: load, $polling: polling })

    return Array.isArray(vnode) && vnode.length === 1 ? vnode[0] : h(this.tag, vnode)
  }
}
