<script setup>
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import PageOptions from '@/components/elements/PageOptions';
import { onMounted, watch, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const switchTheme = () => {
  let htmlElement = document.documentElement;

  if (store.state.siteElements.darkMode) {
    localStorage.setItem("theme", "dark");
    htmlElement.setAttribute("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
    htmlElement.setAttribute("theme", "light");
  }
};

onMounted(() => {
  let bodyElement = document.body;
  bodyElement.classList.add("app-background");
  switchTheme();
});

const darkMode = computed(() => store.state.siteElements.darkMode);

watch(darkMode, switchTheme);
</script>


<template>
  <div class="app">
    <div class="app-container">

      <SiteHeader />

      <div class="content">

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

      <PageOptions />

      <SiteFooter />

    </div>
  </div>
</template>


<style lang="scss">
@import '@/assets/scss/reset.scss';
@import "@/assets/scss/app.scss";
@import '@/assets/scss/typography.scss';

.app {
  height: 100%;
}


// MOBILE ================================================================== //

@include mobile {
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
