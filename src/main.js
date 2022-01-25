import { createApp } from 'vue'
import App from './App.vue'
import infiniteScroll from 'vue3-infinite-scroll-good'

fetch(process.env.BASE_URL + "config.json")
  .then((response) => response.json())
  .then((config) => {
    const message = config.message
    const startdate = new Date(config.startdate)
    createApp(App, {message, startdate })
    .use(infiniteScroll)
    .mount('#app')
  })
