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
  <div class="post-card">
    <router-link :to="props.path">
      <h2 class="title">
        {{ props.title }}
      </h2>

      <span class="date">{{ formatDate(props.date) }}</span>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap');

.post-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 24px 0;
  width: 600px;
  height: auto;

  font-family: 'Arvo', serif;
  text-align: left;

  .title {
    font-size: 24px;
  }

  .date {
    font-size: 18px;
  }
}

.title {
  margin-bottom: 8px;
}
</style>
