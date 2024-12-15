import './assets/main.css'
import { MotionPlugin } from "@vueuse/motion";
import { MotionDirective as motion } from "@vueuse/motion";


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(MotionPlugin);
app.use(router)

export default {
  directives: {
    motion: motion(),
  },
};

app.mount('#app')
