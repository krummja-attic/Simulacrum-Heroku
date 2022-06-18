import type { RouteRecordRaw } from 'vue-router'
import autoRoutes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const routes: RouteRecordRaw[] = autoRoutes

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    app.use(createPinia())
  },
)
