import { createWebHistory, createMemoryHistory, createRouter } from 'vue-router'

import App1 from './page/app1/index.vue'
import App2 from './page/app2/index.vue'

const routes = [
  { path: '/app1', component: App1 },
  { path: '/app2', component: App2 },
]

export const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
})