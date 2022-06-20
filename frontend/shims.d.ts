import 'vue-router'
import 'markdown-it-katex'

declare global {
  declare module 'vue-router' {
    interface RouteMeta {
      frontmatter: any
    }
  }

  declare module 'markdown-it-katex'
}
