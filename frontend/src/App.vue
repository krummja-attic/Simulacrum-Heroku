<script setup>
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import PageOptions from '@/components/elements/PageOptions';
import { onMounted, watch, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const storageKey = 'theme-preference';

function getColorPreference () {
  if (localStorage.getItem(storageKey)) {
    return localStorage.getItem(storageKey);
  } else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}

function reflectPreference (themeSetting) {
  let htmlElement = document.documentElement;
  htmlElement.setAttribute('theme', themeSetting);
  localStorage.setItem(storageKey, themeSetting);
}

onMounted(() => {
  store.dispatch('siteElements/setTheme', getColorPreference());
  reflectPreference(store.state.siteElements.theme);
})

const theme = computed(() => store.state.siteElements.theme);
watch(theme, () => { reflectPreference(theme.value) });
</script>


<template>
  <div 
    ref="app"
    class="app"
  >
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

#app {
  height: 100%;
}

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
