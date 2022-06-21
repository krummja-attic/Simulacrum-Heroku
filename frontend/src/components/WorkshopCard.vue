<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  title: string
  date: string | number
  path: RouteLocationRaw
}>()
</script>

<template>
  <router-link :to="props.path">
    <div class="workshop-card prose">
      <h1 class="title">
        {{ props.title }}
      </h1>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
@import "@/../assets/css/layout.scss";

.icon {
  display: block;
  width: 2em;
  height: 2em;
  margin-right: 5px;
}

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
