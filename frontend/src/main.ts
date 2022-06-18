import autoRoutes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

// const routes = autoRoutes.map((i) => {
//   return {
//     ...i,
//   }
// })

const routes = autoRoutes

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    app.use(createPinia())
  },
)
