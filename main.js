import { createSSRApp } from 'vue'
import App from './App.vue'

/*
**因Chrome51 版本以后，Chrome 增加了新的事件捕获机制－Passive Event Listeners，
**主要解决页面滑动性能
*/
import 'default-passive-events'
 

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}

