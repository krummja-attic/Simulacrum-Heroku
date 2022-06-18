<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
counter.increment()
</script>

<template>
  <main>
    <router-view />
  </main>
</template>
