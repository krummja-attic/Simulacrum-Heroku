<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { formatDate } from '../utilities'

const props = defineProps<{
  title: string
  date: string
  path: RouteLocationRaw
}>()
</script>

<template>
  <div class="post-card prose">
    <router-link :to="props.path">
      <h1 class="title">
        {{ props.title }}
      </h1>

      <h2 class="date">
        {{ formatDate(props.date) }}
      </h2>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap');

.post-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 8px 0;
  padding: 8px 12px;
  width: 600px;
  height: auto;

  font-family: 'Arvo', serif;
  text-align: left;

  &:hover {
    box-shadow: 2px 2px 10px var(--c-bg-darker);
  }

  transition: box-shadow 0.15s ease-in;
}
</style>
