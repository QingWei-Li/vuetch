<vuetch
  :http="axios"
  url="https://maps.googleapis.com/maps/api/geocode/json"
  :options="{
    params: {
      address: address
    }
  }">
  <template scope="props">
    <div>
      <form @submit.prevent="props.$load">
        <input type="search" v-model="address">
        <button type="submit">submit</button>
      </form>
      <pre>{{ $at(props, 'data.data.results') }}</pre>
    </div>
  </template>
</vuetch>

<script>
  new Vue({
    el: 'main',

    data: {
      address: 'shanghai'
    },

    created: function () {
      this.axios = window.axios
    }
  })
</script>


```html
<vuetch
  :http="axios"
  url="https://maps.googleapis.com/maps/api/geocode/json"
  :options="{
    params: {
      address: address
    }
  }">
  <template scope="props">
    <div>
      <form @submit.prevent="props.$load">
        <input type="search" v-model="address">
        <button type="submit">submit</button>
      </form>
      <pre>{{ $at(props, 'data.data.results') }}</pre>
    </div>
  </template>
</vuetch>

<script>
  import Vue from 'vue'
  import Vueo from 'vueo'

  Vue.use(Vueo)
  new Vue({
    el: 'main',

    data: {
      address: 'shanghai',
    },

    created: function () {
      this.axios = window.axios
    }
  })
</script>
```