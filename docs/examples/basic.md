基本用法。

```html
<vuetch url="https://unsplash.it/list">
  <template scope="props">
    <ul>
      <li v-if="props.loading">loading...</li>
      <li v-for="(o, $index) in props.data" v-if="$index < 12">
        <img :src="o.post_url" :alt="o.filename">
        <p>author: <a :href="o.author_url">{{ o.author }}</a></p>
      </li>
    </ul>
  </template>
</vuetch>
```

<vuetch url="https://unsplash.it/list">
  <template scope="props">
    <ul class="demo demo-basic">
      <li v-if="props.loading">loading...</li>
      <li v-for="(o, $index) in props.data" v-if="$index < 12">
        <img :src="o.post_url" :alt="o.filename">
        <p>author: <a :href="o.author_url">{{ o.author }}</a></p>
      </li>
    </ul>
  </template>
</vuetch>