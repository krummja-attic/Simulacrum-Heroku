<script setup>
import NavBar from '@/components/NavBar';
import SiteLogo from '@/components/SiteLogo';
</script>


<template>
  <div class="app-header">
    <SiteLogo />
    <div class="mobile-content desktop-hidden">
      <!--  -->
    </div>
    <div 
      id="navWrapper"
      class="header-content mobile-hidden"
    >
      <NavBar />
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.app-header {
  display: flex;
}

@include mobile {
  .app-header {
    flex-direction: row;
    width: 100%;
  }

  .mobile-content {
    flex-direction: row;
    width: 100%;
    height: 100px;
  }
}

@include tablet {
  .app-header {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .header-content {
    display: flex;
    flex-direction: row;
    height: 100px;
  }
}

@include desktop {
  .app-header {
    flex-direction: row;
    top: 0;
    width: 100%;
    height: 100px;
  }
}
</style>
