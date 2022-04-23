<script setup>
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
</script>


<template>
  <div class="app">
    <div class="container">

      <SiteHeader />

      <div class="content">
        <router-view v-slot="{ Component, route }">
          <transition name="fade">
            <component 
              :is="Component" 
              :key="route.path" 
            />
          </transition>
        </router-view>
      </div>

      <SiteFooter />

    </div>
  </div>
</template>


<style lang="scss">
@import url('assets/scss/reset.scss');
@import url('assets/scss/typography.scss');


/** Standard Elements */

* {
  scrollbar-width: thin;
  scrollbar-color: $accent-purple-4 transparent;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 3px solid $nero;
  }
}

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

.content {
  flex: 1 0 auto;
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
