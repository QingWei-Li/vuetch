(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vuetch = factory());
}(this, (function () { 'use strict';

var index = function (target) {
  var arguments$1 = arguments;

  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};

/**
 * Object.assign ponyfill
 */
var assign = Object.assign || index;

var Vuetch$1 = {
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

  data: function data () {
    return {
      loading: false,
      data: this.defaultData,
      error: null
    }
  },

  watch: {
    loop: {
      immediate: true,
      handler: function handler (val) {
        this.counter = Number(typeof val === 'number');
      }
    }
  },

  created: function created () {
    if (this.manual) { return }
    // start polling
    if (this.immediate) {
      this.load();
      clearTimeout(this.loopId);
    }
    this.polling();
  },

  methods: {
    load: function load (cb) {
      var this$1 = this;

      this.loading = true;
      var http = this.http || window.fetch;

      http(this.url, assign({}, this.$options.defaultOptions, this.options))
        .then(function (result) { return result.json ? result.json() : result; })
        .then(function (data) {
          this$1.loading = false;
          this$1.data = data;
          this$1.emit('onsuccess', data);
          this$1.emit('oncomplete');
          typeof cb === 'function' && cb();
        })
        .catch(function (error) {
          this$1.loading = false;
          this$1.error = error;
          this$1.emit('onerror', error);
          this$1.emit('oncomplete');
          typeof cb === 'function' && cb();
        });
    },

    polling: function polling () {
      var this$1 = this;

      clearTimeout(this.loopId);
      if (this.counter && this.counter++ > this.loop) { return }
      this.loopId = setTimeout(function (_) { return this$1.load(this$1.polling); }, this.delay);
    },

    emit: function emit (event, data) {
      var fn = this.$options[event];

      typeof fn === 'function' && fn(event, data);
      this.$emit(event, data);
    }
  },

  render: function render (h) {
    var slots = this.$scopedSlots.default;
    var ref = this;
    var data = ref.data;
    var error = ref.error;
    var loading = ref.loading;
    var load = ref.load;
    var polling = ref.polling;
    var vnode = slots({ data: data, error: error, loading: loading, $load: load, $polling: polling });

    return Array.isArray(vnode) && vnode.length === 1 ? vnode[0] : h(this.tag, vnode)
  }
};

Vuetch$1.install = function (Vue, opts) {
  if ( opts === void 0 ) opts = {};

  Vuetch$1.defaultOptions = opts.options;
  Vuetch$1.props.defaultData.default = function () { return opts.defaultData; };
  Vuetch$1.onerror = opts.onerror;
  Vuetch$1.onsuccess = opts.onsuccess;
  Vuetch$1.oncomplete = opts.oncomplete;

  Vue.component(Vuetch$1.name, Vuetch$1);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuetch$1.install);
}

return Vuetch$1;

})));
