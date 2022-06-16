<script setup>
const props = defineProps({
  link: {
    type: String,
    default: "/",
  },
  content: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="nav-item" debug="orange">
    <router-link :to="props.link">
      {{ props.content }}
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.nav-item {
  width: 120px;
  height: auto;
}
</style>
