<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="app">
    <!--  -->
    <Header />

    <!--  -->
    <router-view
      v-slot="{ Component }"
      class="content"
    >
      <transition mode="out-in" name="fade">
        <component
          :is="Component"
          :key="route.fullPath"
        />
      </transition>
    </router-view>
    <!--  -->

    <Footer />
    <!--  -->
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import "@/../assets/css/layout.scss";

$desktop-max-width: 650px;
$tablet-max-width: 550px;

.app {
  display: grid;
  grid-template-rows: 60px 1fr auto;
  grid-template-columns: repeat(8, 1fr);

  height: 100vh;
  margin: 0 auto;
}

.content {
  display: flex;
  flex-direction: column;
  grid-row-start: 2;
  grid-column: 1 / 9;
  padding: 0 16px;
  width: 100%;

  @include desktop {
    grid-column: 2 / 8;
  }
}

// Transition definitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
