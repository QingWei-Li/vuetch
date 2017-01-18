# vuetch (Vue + fetch)
[![Build Status](https://travis-ci.org/QingWei-Li/vuetch.svg?branch=master)](https://travis-ci.org/QingWei-Li/vuetch)
[![Coverage Status](https://coveralls.io/repos/github/QingWei-Li/vuetch/badge.svg?branch=master)](https://coveralls.io/github/QingWei-Li/vuetch?branch=master)
[![npm](https://img.shields.io/npm/v/vuetch.svg)](https://www.npmjs.com/package/vuetch)

>👻 A Vue 2.0 component that fetches data from a http request.

Sometimes we just want to requrest an api and display data in the view. Why not write directly in the template.🤔

## Features
- Supports fetch and other HTTP clients(axios, vue-resource, etc.)
- Supports polling
- Simplify your code

## Installation
```shell
npm i vuetch -S
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

## API
### props
- url
- options
- http
- loop
- delay

### events
- onerror
- onsuccess

## License
MIT
