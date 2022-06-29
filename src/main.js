import { createApp } from 'vue'
import App from './App.vue'
// import router from '@/router/router.js'
import store from '@/store/store'
import VueDragResize from 'vue-drag-resize'

// createApp(App).use(router).use(store).mount('#app')
createApp(App).use(store).use(VueDragResize).mount('#app')
