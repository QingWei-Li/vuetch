手动触发 load 方法。

```html
<vuetch
  manual
  :default-data="{}"
  :url="'https://api.npms.io/v2/search?q=' + query">
  <template scope="props">
    <form>
      <h1>NPM search</h1>
      <input type="search" v-model="query">
      <button type="submit" @click.prevent="props.$load">search</button>
    </form>
    <div v-if="props.loading">loading...</div>
    <ul>
      <li v-for="pkg in props.data.results">
        <h2>{{ pkg.package.name }}</h2>
        <blockquote>{{ pkg.package.description }}</blockquote>
        <a :href="pkg.package.links.npm">npm</a>
        <a :href="pkg.package.links.repository">repository</a>
      </li>
    </ul>
  </template>
</vuetch>

<script>
  new Vue({
    el: 'main',

    data: { query: '' }
  })
</script>
```

<vuetch
  manual
  :default-data="{}"
  :url="'https://api.npms.io/v2/search?q=' + query">
  <template scope="props">
    <div class="demo demo-manual">
      <form>
        <h1>NPM search</h1>
        <input placeholder="input package name" type="search" v-model="query">
        <button type="submit" @click.prevent="props.$load">search</button>
      </form>
      <div class="loading" v-if="props.loading">loading...</div>
      <ul>
        <li v-for="pkg in props.data.results">
          <h2>{{ pkg.package.name }}</h2>
          <blockquote>{{ pkg.package.description }}</blockquote>
          <a :href="pkg.package.links.npm">npm</a>
          <a :href="pkg.package.links.repository">repository</a>
        </li>
      </ul>
    </div>
  </template>
</vuetch>

<script>
  new Vue({
    el: 'main',

    data: { query: '' }
  })
</script>
