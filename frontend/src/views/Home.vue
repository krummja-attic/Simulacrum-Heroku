<script>
import Panel from '@/components/site/Panel.vue';
import { gsap } from 'gsap';

export default {
  components: {
    Panel
  },
  mounted() {
    this.$store.dispatch("siteElements/setActiveButton", this.$route.name);
  },
  beforeRouteLeave(to, from) {}
}
</script>

<template>
  <div ref="componentRoot" class="home">
    <div class="home-view">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &-view {
    display: flex;
    flex-direction: row wrap;
    margin: 0 12%;
  }
}
</style>
