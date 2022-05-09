import { onMounted, computed, watch } from 'vue';
import { useStore } from 'vuex';

export const useTheme = (elRef) => {
  const store = useStore();

  const setTheme = () => {
    if (store.state.siteElements.darkMode) {
      elRef.value.setAttribute("theme", "dark");
    } else {
      elRef.value.setAttribute("theme", "light");
    }
  };

  onMounted(() => {
    setTheme();
  });

  const darkMode = computed(() => store.state.siteElements.darkMode);
  watch(darkMode, setTheme);

  return elRef;
}
