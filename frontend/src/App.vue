<script setup>
import SiteHeader from '@/components/site/SiteHeader';
</script>


<template>
  <div class="app">
    <div class="container">

      <SiteHeader />

      <router-view v-slot="{ Component, route }">
        <transition name="fade">
          <component 
            :is="Component" 
            :key="route.path" 
          />
        </transition>
      </router-view>

      <div class="spacer" />
      <footer>copyright 2022 - jonathan crum</footer>
    </div>
  </div>
</template>


<style lang="scss">
@import url('assets/scss/reset.scss');
@import url('assets/scss/typography.scss');


/** Standard Elements */

html {
  height: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  font-size: 100%;

  overflow-y: scroll;

  @supports (scrollbar-gutter: stable) {
    overflow-y: auto;
    scrollbar-gutter: stable;
  }
}

body {
  height: 100vh;
  background-color: $defaultian;
  background-image: url("../public/img/noise_2.png");
}

footer {
  display: flex;
  flex-direction: row;
  margin: auto;
  padding-bottom: 4px;
  
  font: 14pt 'Gruppo', monospace;
  color: $dark-ash;
}


/** Application Base */

.app {
  height: 100%;
}

.container {
  margin: 0 12%;
  background-color: transparent;
  height: 100%;

  display: flex;
  flex-direction: column;
}

.spacer {
  flex-grow: 1;
}


/** Router Transitions */

.fade-enter-from {
  transform: translate(0, 200px);
}

.fade-leave-to {
  transform: translate(0, -100px);
}

.fade-enter-from, 
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active, 
.fade-leave-active {
  transition: 
    opacity 0.1s ease-out,
    transform 0.1s ease-out;
}
</style>
