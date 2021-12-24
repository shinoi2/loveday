import { createApp } from 'vue'
import App from './App.vue'
import infiniteScroll from 'vue3-infinite-scroll-good'

createApp(App)
    .use(infiniteScroll)
    .mount('#app')
