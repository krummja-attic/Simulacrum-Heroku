<template>
  <div class="nav-item">
    <div class="nav-item-view" ref="navItem">
      <router-link :to='path'>
        {{ label }}
      </router-link>
    </div>
  </div> <!-- /nav-item -->
</template>

<script>
export default {
  props: {
    path: String,
    label: String
  },
  methods: {
    getPositionInfo() {
      let item = this.$refs.navItem;
      let rectData = item.getBoundingClientRect();
      this.$emit('updatePosition', rectData);
    }
  },
  mounted() {
    this.getPositionInfo();
  }
}
</script>

<style lang="scss" scoped>
$cyan: rgba(0, 255, 255, 1);

.nav-item {
  padding: 16px 8px;

  &-view {
    font: 20pt gruppo, cursive;
    text-transform: uppercase;

    a {
      text-decoration: none;
      transition-property: color;
      transition-duration: 0.2s;
      transition-timing-function: cubic-bezier();

      &:link, 
      &:visited {
        color: rgba(247, 243, 239, 0.5);
      }

      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>
