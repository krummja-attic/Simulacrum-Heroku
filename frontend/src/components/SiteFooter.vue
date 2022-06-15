<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  document.body.style.setProperty(
    "--scrollbar-width",
    `${window.innerWidth - document.body.clientWidth}px`
  );
});
</script>


<template>
  <div class="footer">
    <div />
  </div>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.footer {
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: center;
  width: 100%;

  span {
    font: 12pt 'Arvo', sans-serif;
    color: var(--primary-text-color);
  }
}
</style>
