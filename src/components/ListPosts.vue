<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const postRoutes = router.getRoutes()
  .filter(i => i.path.startsWith('/blog') 
            && !i.path.endsWith('.html'));

const posts = computed(() => {
  if (route.query.tags) {}
  return postRoutes;
});
</script>

<template>
  <ul>
    <li
      v-for="post in posts"
      :key="posts.path"
    >
      <router-link
        :to="post.path"
      >
        {{ post.meta.frontmatter.title }}
      </router-link>
    </li>
  </ul>
</template>
