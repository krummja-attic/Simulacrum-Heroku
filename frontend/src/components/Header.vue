<script setup lang="ts">
import { isDark } from '../utilities'
</script>

<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <img v-show="isDark" src="@/../assets/img/logo-light.svg">
        <img v-show="!isDark" src="@/../assets/img/logo-dark.svg">
      </router-link>
    </div>

    <nav class="desktop-nav">
      <router-link to="/blog">
        Blog
      </router-link>

      <router-link to="/projects">
        Projects
      </router-link>

      <router-link to="/workshop">
        Workshop
      </router-link>
      <ToggleTheme />
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "@/../assets/css/layout.scss";

header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  grid-column: 1 / 9;
  padding: 0 16px;
  width: 100%;
  height: 100%;

  @include desktop {
    grid-column: 2 / 8;
    padding: 0;
    width: 100%;
    height: 100%;
  }
}

.logo {
  width: 40px;

  @include tablet {
    width: 48px;
  }

  @include desktop {
    width: 64px;
  }
}

nav {
  display: flex;
  align-items: center;

  & > a {
    margin: 0 16px;
    font-weight: 600;
    font-size: 16px;

    @include tablet {
      font-size: 18px;
    }

    @include desktop {
      font-size: 18px;
    }
  }

  & * {
    opacity: 0.6;

    &:hover {
      cursor: pointer;
      opacity: 1;
    }

    transition: opacity 0.15s ease-in;
  }
}
</style>
