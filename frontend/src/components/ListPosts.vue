<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const postRoutes = router.getRoutes()
  .filter(i => i.path.startsWith('/blog')
           && !i.path.endsWith('.html')
           && !(i.name === 'blog'
             || i.name === undefined))

const posts = computed(() => {
  if (route.query.tags)
    return
  return postRoutes
})
</script>

<template>
  <ul>
    <li
      v-for="post in posts"
      :key="post.path"
    >
      <router-link :to="post.path">
        {{ post.meta.frontmatter.title }}
      </router-link>
    </li>
  </ul>
</template>
