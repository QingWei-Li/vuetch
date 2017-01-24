import { assign, warn } from './util'

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
    immediate: Boolean
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
    // start poll
    if (this.immediate) {
      this.load()
      clearTimeout(this.loopId)
    }
    this.poll()
  },

  methods: {
    load (cb) {
      this.loading = true
      const http = this.http || window.fetch

      http(this.url, assign({}, this.$options.defaultOptions, this.options))
        .then(res => res.json ? res.json() : res)
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

    poll () {
      clearTimeout(this.loopId)
      if (this.counter && this.counter++ > this.loop) return
      this.loopId = setTimeout(_ => this.load(this.poll), this.delay)
    },

    emit (event, data) {
      const fn = this.$options[event]

      typeof fn === 'function' && fn(event, data)
      this.$emit(event, data)
    }
  },

  render (h) {
    const slots = this.$scopedSlots.default
    const { data, error, loading, load, poll } = this
    const vnode = slots({ data, error, loading, $load: load, $poll: poll })

    if (Array.isArray(vnode) && vnode.length > 1) {
      warn('Multiple root nodes returned from render function. Render function should return a single root node.')
      return ''
    } else {
      return vnode[0]
    }
  }
}
