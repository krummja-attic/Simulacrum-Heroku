<script setup>
import NavBar from '@/components/site/NavBar';
import SiteLogo from '@/components/site/SiteLogo';
</script>


<template>
  <div class="header">
    <SiteLogo />
    <div class="mobile-content desktop-hidden">
      <!--  -->
    </div>
    <div class="header-content mobile-hidden">
      <NavBar />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.header {
  display: flex;
}

@include mobile {
  .header {
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
  .header {
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
  .header {
    flex-direction: row;
    top: 0;
    width: 100%;
    height: 60px;
  }
}
</style>
