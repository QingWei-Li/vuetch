?> 每隔 5 秒请求一次数据。

```html
<vuetch
  loop
  immediate
  :delay="5000"
  :default-data="{}"
  url="https://newsapi.org/v1/articles?source=bbc-news&apiKey=a7e3a141ea224ed6b354c4354300699b">
  <template scope="props">
    <ul class="demo demo-poll">
      <li>status: {{ props.loading ? 'loading...' : 'done'}}</li>
      <li v-for="o in props.data.articles">
        <img v-if="o.urlToImage" :src="o.urlToImage" :alt="o.title">
        <h2>{{ o.title }}</h2>
        <p class="info">
          <span>{{ o.author }}</span>
          <time :datetime="o.publishedAt">{{ o.publishedAt | date }}</time>
        </p>
        <blockquote>
          <p>{{ o.description }}</p>
        </blockquote>
        <a :href="o.url">Read more</a>
      </li>
    </ul>
  </template>
</vuetch>
```

<div>
  <h1>BBC News</h1>
  <vuetch
    loop
    immediate
    :delay="5000"
    :default-data="{}"
    url="https://newsapi.org/v1/articles?source=bbc-news&apiKey=a7e3a141ea224ed6b354c4354300699b">
    <template scope="props">
      <ul class="demo demo-poll">
        <li>status: {{ props.loading ? 'loading...' : 'done'}}</li>
        <li v-for="o in props.data.articles">
          <img v-if="o.urlToImage" :src="o.urlToImage" :alt="o.title">
          <h2>{{ o.title }}</h2>
          <p class="info">
            <span>{{ o.author }}</span>
            <time :datetime="o.publishedAt">{{ o.publishedAt | date }}</time>
          </p>
          <blockquote>
            <p>{{ o.description }}</p>
          </blockquote>
          <a :href="o.url">Read more</a>
        </li>
      </ul>
    </template>
  </vuetch>
</div>