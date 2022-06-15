<script setup>
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageOptions from '@/components/PageOptions';
import { onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();

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

        <router-view v-slot="{ Component }">
          <transition
            mode="out-in"
            name="fade"
          >
            <component 
              :is="Component"
              :key="route.fullPath"
            />
          </transition>
        </router-view>
      </div>

      <!-- In Tablet/Mobile this should disappear -->
      <PageOptions />

      <!-- As should this -->
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

  .content {
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
    justify-content: center;
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

  .content {
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
    justify-content: center;
  }
}


@include desktop {
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .content {
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
    justify-content: center;
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
