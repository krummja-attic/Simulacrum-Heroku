<script setup lang="ts">
const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true
  },
})
</script>

<template lang="pug">
div(v-if="frontmatter.display ?? frontmatter.title" class="m-auto mb-8")
  .frontmatter
    h1(class="mb-8") {{ frontmatter.display ?? frontmatter.title }} 
  article
    slot/
</template>
