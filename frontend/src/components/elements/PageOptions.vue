<script setup>
import ThemeSwitch from '@/components/elements/ThemeSwitch';
</script>


<template>
  <div class="page-options">
    <div class="page-options-wrapper">
      <ThemeSwitch />
    </div>
  </div>
</template>


<style scoped lang="scss">
.page-options {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  position: sticky;
  bottom: 16px;
  width: 100%;
  height: auto;
}

.text-size {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3px;

  width: 60px;
  height: 100%;
}

.theme-switch {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3px;

  height: 36px;
  margin-right: 96px;
}
</style>
