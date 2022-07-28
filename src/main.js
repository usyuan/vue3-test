import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 捕获所有由子组件上抛而未被处理的错误
app.config.errorHandler = (err) => { 
    /* 处理错误 */
    console.log(err);
}
// 注册应用范围内可用的资源，使得 TodoDeleteButton 在应用的任何地方都是可用的
// app.component('TodoDeleteButton', TodoDeleteButton) 

app.mount('#app')
