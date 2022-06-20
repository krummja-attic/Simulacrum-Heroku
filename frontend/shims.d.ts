import type { RouteRecordNormalized } from 'vue-router'
import 'vue-router'
import 'markdown-it-katex'

declare module 'vue-router' {
  interface Frontmatter {
    title: string
    date: string | number
    icon: string
  }

  interface RouteMeta {
    frontmatter: Frontmatter
  }

  interface PostRoute extends RouteRecordNormalized {
    meta: RouteMeta
  }
}
