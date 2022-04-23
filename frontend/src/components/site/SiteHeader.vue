<script setup>
import NavBar from '@/components/site/NavBar';
import SiteLogo from '@/components/site/SiteLogo';
</script>


<template>
  <div class="header">
    <div class="header-content">
      <SiteLogo />
      <span class="logo-text">simulacrum</span>
    </div>

    <NavBar />
  </div>
</template>


<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 20px 0 5px 0;

  &-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    border-bottom: 2px solid rgba(247, 243, 239, 0.5);

    .logo-text {
      margin-top: auto;
      margin-bottom: 5px;

      font: 60pt 'Megrim', monospace;
      color: rgba(247, 243, 239, 0.5);
    }
  }
}
</style>
