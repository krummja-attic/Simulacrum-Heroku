<script setup>
import OptionButton from "./OptionButton.vue";
import DarkMode from '@/components/elements/icons/DarkMode';
import LightMode from '@/components/elements/icons/LightMode';
import { useStore } from "vuex";

const store = useStore();

const switchDark = () => store.dispatch('siteElements/setDarkTheme');
const switchLight = () => store.dispatch('siteElements/setLightTheme');
</script>


<template>
  <div class="page-options">
    <div class="theme-switch">
      <OptionButton :on-click="switchDark">
        <DarkMode />
      </OptionButton>
      
      <OptionButton :on-click="switchLight">
        <LightMode />
      </OptionButton>
    </div>
  </div>
</template>


<style scoped lang="scss">
.page-options {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  position: sticky;
  bottom: 20px;
  width: 100%;
  height: 24px;
}

.text-size {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3px;

  width: 60px;
  height: 100%;
}

.theme-switch {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3px;

  margin-right: 96px;
}
</style>
