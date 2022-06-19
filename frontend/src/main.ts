import type { RouteRecordRaw } from 'vue-router'
import autoRoutes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const routes: RouteRecordRaw[] = autoRoutes

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    dayjs.extend(LocalizedFormat)
    app.use(createPinia())
  },
)
