<script setup>
import NavBar from '@/components/site/NavBar';
import SiteLogo from '@/components/site/SiteLogo';
// import { onMounted } from "vue";

// const options = {
//   root: document.querySelector('#app'),
//   rootMargin: '0px',
//   threshold: 1.0,
// };

// const observer = new IntersectionObserver((entities, observer) => {
//   // console.log(entities);
//   // console.log(observer);
// }, options);

// onMounted(() => {
//   let navWrapper = document.querySelector('#navWrapper');
//   observer.observe(navWrapper);
// });
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

.header-content {
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
