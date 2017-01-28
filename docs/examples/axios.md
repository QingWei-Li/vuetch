<vuetch :http="axios" url="https://maps.googleapis.com/maps/api/geocode/json">
  <template scope="props">
    <div>
      <input type="text" v-model="address">
      <pre>{{ props.data }}</pre>
      <pre>{{ props.error }}</pre>
      <div>{{ props.loading }}</div>
    </div>
  </template>
</vuetch>

<script>
  new Vue({
    el: 'main',

    data: {
      address: '',
      axios: window.axios
    }
  })
</script>
