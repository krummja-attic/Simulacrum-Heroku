<script setup>
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import { onMounted, ref, watch } from 'vue';

const darkMode = ref(false);

onMounted(() => {
  let bodyElement = document.body;
  bodyElement.classList.add("app-background");
});

watch(darkMode, () => {
  let htmlElement = document.documentElement;

  if (darkMode.value) {
    console.log("Dark Mode");
    localStorage.setItem("theme", "dark");
    htmlElement.setAttribute("theme", "dark");
  } else {
    console.log("Light Mode");
    localStorage.setItem("theme", "light");
    htmlElement.setAttribute("theme", "light");
  }
});
</script>

<template>
  <div class="app">
    <div class="app-container">

      <SiteHeader />

      <div class="content">
        <input 
          v-model="darkMode"
          type="checkbox"
          class="theme-switch"
        >

        <router-view v-slot="{ Component, path }">
          <transition
            mode="out-in"
            name="fade"
          >
            <component 
              :is="Component"
              :key="path"
            />
          </transition>
        </router-view>
      </div>

      <SiteFooter />

    </div>
  </div>
</template>


<style lang="scss">
@import './assets/scss/reset.scss';
@import "@/assets/scss/app.scss";
@import './assets/scss/typography.scss';


// GLOBAL ================================================================== //

* {
  // scrollbar-width: thin;
  // scrollbar-color: $accent-1 transparent;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 3px solid var(--primary-text-color);
  }
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
  height: 100%;

  overflow-y: scroll;
  font-size: 100%;

  @supports (scrollbar-gutter: stable) {
    overflow-y: auto;
    scrollbar-gutter: stable;
  }
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: var(--primary-background-color);
}

.app {
  height: 100%;
}


// MOBILE ================================================================== //

@include mobile {
  body {
    --body-width: calc(100vw - 36px);
  }

  .app-container {
    display: flex;
    flex-direction: column;

    width: var(--body-width);
    height: 100%;
    margin: 0 auto;
    padding: 0 5px;
  }
}


// TABLET ================================================================== //

@include tablet {
  body {
    --body-width: calc(650px + 15vw);
  }

  .app-container {
    display: flex;
    flex-direction: column;

    width: var(--body-width);
    height: 100%;
    margin: 0 auto;
    padding: 0 5px;
  }
}


// DESKTOP ================================================================= //

@include desktop {
  body {
    --body-width: 100%;
  }

  .app-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .content {
    flex: 1 0 auto;
  }
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
