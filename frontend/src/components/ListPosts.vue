<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const postRoutes = router.getRoutes()
  .filter(i =>
    i.path.startsWith('/blog')
    && i.meta.frontmatter.date
    && !i.path.endsWith('.html')
    && !(i.name === 'blog' || i.name === undefined))
  .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))

const posts = computed(() => {
  if (route.query.tags)
    return
  return postRoutes
})
</script>

<template>
  <ul class="list-posts">
    <li
      v-for="post in posts"
      :key="post.path"
    >
      <PostCard
        :title="post.meta.frontmatter.title"
        :date="post.meta.frontmatter.date"
        :path="post.path"
      />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.list-posts {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
