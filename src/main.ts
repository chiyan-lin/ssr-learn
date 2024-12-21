import { createSSRApp } from 'vue'
import App from './page/layout.vue'
import { router } from './router'
import { createPinia } from 'pinia'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)

  app.use(router)

  const store = createPinia()
  app.use(store)  

  return { app, router, store }
}
