<script setup lang="ts">
import type { PostRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

function fetchRoutes() {
  const routes: PostRoute[] = router.getRoutes()
    .filter((route: any): PostRoute =>
      route.path.startsWith('/workshop')
      && route.meta.frontmatter.date
      && !route.path.endsWith('.html')
      && !(route.name === 'blog' || route.name === undefined))
    .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))

  return routes
}

const projects = computed(() => {
  if (route.query.tags)
    return
  const routes = fetchRoutes()
  return routes
})
</script>

<template lang="pug">
ul.list-workshop
  li(v-for="project in projects" :key="project.path")
    WorkshopCard(
      :title="project.meta.frontmatter.title"
      :date="project.meta.frontmatter.date"
      :path="project.path"
    )
</template>

<style scoped lang="scss">
.list-workshop {
  grid-column-start: 2;
  grid-column-end: 8;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
