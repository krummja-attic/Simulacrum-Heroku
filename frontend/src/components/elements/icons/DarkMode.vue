<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const icon = ref(null);

const setTheme = () => {
  if (store.state.siteElements.darkMode) {
    icon.value.setAttribute("theme", "dark");
  } else {
    icon.value.setAttribute("theme", "light");
  }
};

onMounted(() => {
  setTheme();
})

const darkMode = computed(() => store.state.siteElements.darkMode);
watch(darkMode, setTheme);
</script>


<template>
  <svg 
    ref="icon"
    class="icon" 
    width="20" 
    height="21" 
    viewBox="0 0 20 21" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.10293 0.380555C8.23095 0.536117 8.30938 0.726494 8.32808 0.92709C8.34678 1.12769 8.3049 1.32928 8.20785 1.50583C7.44961 2.89796 7.05364 4.45842 7.05635 6.04364C7.05635 11.3172 11.3555 15.5875 16.654 15.5875C17.3451 15.5875 18.0179 15.5153 18.6645 15.3776C18.8627 15.3347 19.0692 15.3511 19.2581 15.4248C19.447 15.4985 19.61 15.6263 19.7268 15.7921C19.8501 15.9645 19.9129 16.1728 19.9056 16.3846C19.8982 16.5964 19.8211 16.7998 19.6862 16.9633C18.6575 18.2268 17.3599 19.2449 15.8878 19.9432C14.4158 20.6416 12.8064 21.0027 11.1771 21.0001C5.13105 21.0001 0.233887 16.1291 0.233887 10.1277C0.233887 5.61085 3.00641 1.73665 6.95405 0.0946469C7.15069 0.0115391 7.36899 -0.00551843 7.57616 0.0460367C7.78333 0.0975918 7.96817 0.214976 8.10293 0.380555Z" 
    />
  </svg>
</template>


<style scoped lang="scss">
@import "@/assets/vars/_themes.scss";

[theme="light"] {
  .icon {
    transition: fill 0.15s ease-in;
    fill: var(--tertiary-text-color);

    &:hover {
      fill: var(--primary-color);
    }
  }
}

[theme="dark"] {
  .icon {
    transition: fill 0.15s ease-in;
    fill: var(--primary-text-color);
  }
}
</style>
