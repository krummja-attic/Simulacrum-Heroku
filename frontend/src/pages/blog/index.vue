<!-- Blog Index -->

<script setup>
import { usePosts } from '@/composables/usePosts.js';
const posts = usePosts();
</script>

<template>
  <h1> BLOG </h1>
  <router-link to="/">BACK</router-link>
  
  <div
    v-for="post of posts"
    :key="post"
  >
    <router-link :to="'/blog/' + post">post</router-link>
  </div>
</template>
