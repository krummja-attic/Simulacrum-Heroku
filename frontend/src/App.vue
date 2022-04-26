<script setup>
import SiteHeader from '@/components/site/SiteHeader';
// import SiteFooter from '@/components/site/SiteFooter';
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

      <!-- <SiteFooter /> -->

    </div>
  </div>
</template>


<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/typography.scss';

/** Document Elements */

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
  background-color: var(--bg-primary);
}

@include mobile {
  body {
    --body-width: calc(100vw - 36px);
  }

  .container {
    display: flex;
    flex-direction: column;

    width: var(--body-width);
    height: 100%;
    margin: 0 auto;
    padding: 0 5px;
  }
}

@include tablet {
  body {
    --body-width: calc(650px + 15vw);
  }

  .container {
    display: flex;
    flex-direction: column;

    width: var(--body-width);
    height: 100%;
    margin: 0 auto;
    padding: 0 5px;
  }
}

@include desktop {
  .container {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
  }

  .content {
    width: 100%;
  }
}

/** Application Base */

.app {
  height: 100%;
}

/** Router Transitions */

.fade-enter-from {
  transform: translate(0, 100px);
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
    opacity 0.15s ease-out,
    transform 0.15s ease-out;
}
</style>
