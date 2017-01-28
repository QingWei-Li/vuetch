基本用法。

```html
<vuetch url="https://api.github.com/users/QingWei-Li" :default-data="{}">
  <template scope="props">
    <p v-if="props.loading">loading...</p>
    <div v-else>
      <img :src="props.data.avatar_url" :alt="props.data.name">
      <div>
        <h2>{{ props.data.login }}</h2>
        <h3>{{ props.data.name }}</h3>
        <hr>
        <p>
          :earth_asia: <abbr>{{ props.data.location }}</abbr>
        </p>
        <p>
          :email: <a :href="'mailto:' + props.data.email">{{ props.data.email }}</a>
        </p>
        <p>
          :computer: <a :href="props.data.blog">{{ props.data.blog }}</a>
        </p>
      </div>
    </div>
  </template>
</vuetch>
```

<vuetch url="https://api.github.com/users/QingWei-Li" :default-data="{}">
  <template scope="props">
    <p class="demo demo-basic" v-if="props.loading">loading...</p>
    <div v-else class="demo demo-basic">
      <p class="warn" v-if="props.data.message">{{ props.data.message }}</p>
      <img :src="props.data.avatar_url" :alt="props.data.name">
      <div v-if="!props.data.message">
        <h2>{{ props.data.login }}</h2>
        <h3>{{ props.data.name }}</h3>
        <hr>
        <p>
          :earth_asia: <abbr>{{ props.data.location }}</abbr>
        </p>
        <p>
          :email: <a :href="'mailto:' + props.data.email">{{ props.data.email }}</a>
        </p>
        <p>
          :computer: <a :href="props.data.blog">{{ props.data.blog }}</a>
        </p>
      </div>
    </div>
  </template>
</vuetch>
