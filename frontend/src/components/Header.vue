<script setup lang="ts">
import { isDark } from '../utilities'

const lastKnownPos = ref(0)
const isAtTop = ref(true)

onMounted(() => {
  document.addEventListener('scroll', (ev) => {
    lastKnownPos.value = window.scrollY
    if (lastKnownPos.value <= 45) {
      isAtTop.value = true
    } else {
      isAtTop.value = false
    }
  })
})
</script>

<template lang="pug">
header
  .logo-wrapper(:class="{ 'reduced': !isAtTop }")
    .logo(:class="{ 'reduced': !isAtTop }")
      router-link(to="/")
        img(v-show="isDark"  src="@/../assets/img/logo-light.svg")
        img(v-show="!isDark" src="@/../assets/img/logo-dark.svg" )

  nav(:class="{ 'reduced': !isAtTop }")
    HeaderLink(to="/blog" label="Blog")
    HeaderLink(to="/projects" label="Projects")
    HeaderLink(to="/workshop" label="Workshop")
    ToggleTheme
</template>

<style scoped lang="scss">
@import "@/../assets/css/layout.scss";

header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: fixed;
  width: 100vw;
  top: 10px;

  .logo-wrapper {
    width: 40px;
    height: 35px;
    margin-top: 10px;
    margin-left: 30px;
    transition: margin 0.25s ease-out;

    @include tablet {
      width: 48px;
      height: 35px;
    }

    @include desktop {
      width: 64px;
      height: 35px;
    }
  }

  .logo-wrapper:not(.reduced) {
    margin-top: 25px;
    margin-left: 200px;
  }

  nav {
    margin-top: 10px;
    margin-right: 30px;
    transition: margin 0.25s ease-out;
  }
  nav:not(.reduced) {
    margin-top: 25px;
    margin-right: 200px;
  }
}

.logo:not(.reduced) {
  margin: auto;
  width: 100%;
  height: 100%;
}
.logo {
  width: 50%;
  height: 100%;
  transition: width 0.25s ease-out;
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

    transition: opacity 0.15s ease-out;
  }
}
</style>
