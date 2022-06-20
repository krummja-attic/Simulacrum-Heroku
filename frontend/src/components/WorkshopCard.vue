<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  title: string
  date: string | number
  icon?: string
  path: RouteLocationRaw
}>()
</script>

<template>
  <router-link :to="props.path">
    <div class="workshop-card prose">
      <div v-if="props.icon">
        <div class="text-3xl opacity-50" :class="`i-${props.icon}`" w-10 h-10 mr-5 />
      </div>
      <h1 class="title">
        {{ props.title }}
      </h1>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
@import "@/../assets/css/layout.scss";

.workshop-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 0;
  padding: 8px 12px;
  height: auto;

  text-align: left;

  &:hover {
    box-shadow: 2px 2px 10px var(--c-bg-darker);
  }

  transition: box-shadow 0.15s ease-in;
}
</style>
