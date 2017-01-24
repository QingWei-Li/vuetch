>👻 A Vue 2.0 component that fetches data from a http request.

## Installation
```bash
yarn add vuetch
# npm i vuetch -S
```

## Usage

```javascript
import Vuetch from 'vuetch'
import Vue from 'vue'

Vue.use(Vuetch)
```

```html
<vuetch url="https://api.github.com/users/QingWei-Li">
  <template scope="props">
    <pre>{{ props.data }}</pre>
    <pre>{{ props.error }}</pre>
    <div>{{ props.loading }}</div>
  </template>
</vuetch>
```

