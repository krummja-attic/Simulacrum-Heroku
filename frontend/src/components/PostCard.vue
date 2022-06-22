<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { formatDate } from '../utilities'

const props = defineProps<{
  title: string
  date: string | number
  path: RouteLocationRaw
}>()
</script>

<template lang="pug">
.post-card.prose
  router-link(:to="props.path")
    h1.title {{ props.title }}
    h2.date  {{ formatDate(props.date) }}
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

.post-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 8px 0;
  padding: 8px 12px;
  height: auto;

  font-family: 'Lato', sans-serif;
  text-align: left;

  // &:hover {
  //   box-shadow: 2px 2px 10px var(--c-bg-darker);
  // }

  // transition: box-shadow 0.15s ease-in;
}
</style>
