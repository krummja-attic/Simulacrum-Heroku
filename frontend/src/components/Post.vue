<script setup lang="ts">
</script>

<template>
  <div class="content-wrapper">
    <article>
      <slot />
    </article>
  </div>
</template>

<style scoped lang="scss">
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

article {
  margin: 16px 0;
  width: 650px;
}
</style>
