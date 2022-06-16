<!-- Blog Index -- PRESENTATION -->

<script setup>
import ListPosts from '@/components/ListPosts.vue';
</script>

<template>
  <div>
    <h1>Blog Index</h1>
    <div class="post-list">
      <ListPosts />
    </div>
  </div>
</template>

<style scoped>
.post-list {
  width: 300px;
  height: auto;
}
</style>
