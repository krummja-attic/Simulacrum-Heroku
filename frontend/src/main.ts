import type { RouteRecordRaw } from 'vue-router'
import autoRoutes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const routes: RouteRecordRaw[] = autoRoutes

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    app.use(createPinia())
    app.use(VueAxios, axios)
    app.provide('axios', app.config.globalProperties.axios)
  },
)
