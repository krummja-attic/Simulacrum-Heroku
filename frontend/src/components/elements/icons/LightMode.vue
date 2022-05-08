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
    width="21" 
    height="21" 
    viewBox="0 0 21 21" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5079 6.57341C8.33984 6.57341 6.57341 8.33984 6.57341 10.5079C6.57341 12.676 8.33984 14.4424 10.5079 14.4424C12.676 14.4424 14.4424 12.676 14.4424 10.5079C14.4424 8.33984 12.676 6.57341 10.5079 6.57341ZM20.6065 9.87267L16.7253 7.93409L18.0983 3.81924C18.2827 3.26185 17.754 2.73315 17.2007 2.92168L13.0859 4.29466L11.1432 0.409321C10.8809 -0.115282 10.135 -0.115282 9.87267 0.409321L7.93409 4.29056L3.81514 2.91758C3.25775 2.73315 2.72905 3.26185 2.91758 3.81514L4.29056 7.93L0.409321 9.87267C-0.115282 10.135 -0.115282 10.8809 0.409321 11.1432L4.29056 13.0818L2.91758 17.2007C2.73315 17.7581 3.26185 18.2868 3.81514 18.0983L7.93 16.7253L9.86857 20.6065C10.1309 21.1311 10.8768 21.1311 11.1391 20.6065L13.0777 16.7253L17.1925 18.0983C17.7499 18.2827 18.2786 17.754 18.0901 17.2007L16.7171 13.0859L20.5983 11.1473C21.1311 10.8809 21.1311 10.135 20.6065 9.87267ZM14.217 14.217C12.1719 16.2622 8.84395 16.2622 6.79882 14.217C4.75369 12.1719 4.75369 8.84395 6.79882 6.79882C8.84395 4.75369 12.1719 4.75369 14.217 6.79882C16.2622 8.84395 16.2622 12.1719 14.217 14.217Z" 
    />
  </svg>
</template>


<style scoped lang="scss">
@import "@/assets/vars/_themes.scss";

[theme="light"] {
  .icon {
    transition: fill 0.15s ease-in;
    fill: var(--primary-text-color);
  }
}

[theme="dark"] {
  .icon {
    transition: fill 0.15s ease-in;
    fill: var(--tertiary-text-color);

    &:hover {
      fill: var(--primary-color);
    }
  }
}
</style>
