<script setup lang="ts">
import type { PostRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

function fetchRoutes() {
  const routes: PostRoute[] = router.getRoutes()
    .filter((route: any): PostRoute =>
      route.path.startsWith('/blog')
      && route.meta.frontmatter.date
      && !route.path.endsWith('.html')
      && !(route.name === 'blog' || route.name === undefined))
    .sort((a, b) => +new Date(b.meta.frontmatter.date) 
                  - +new Date(a.meta.frontmatter.date))

  return routes
}

const posts = computed(() => {
  if (route.query.tags)
    return
  return fetchRoutes()
})
</script>

<template lang="pug">
ul.list-posts
  li(v-for = "post in posts")
    PostCard(
      :title = "post.meta.frontmatter.title"
      :date  = "post.meta.frontmatter.date"
      :path  = "post.path"
    )
</template>

<style scoped lang="scss">
.list-posts {
  grid-column-start: 2;
  grid-column-end: 8;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
