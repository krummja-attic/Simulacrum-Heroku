<template>
  <div class="nav-item">
    <div class="nav-item-view" ref="navItem">
      <router-link :to='path' @click="updateButtonData()">
        {{ label }}
      </router-link>
    </div> <!-- /nav-item-view -->
  </div> <!-- /nav-item -->
</template>

<script>
export default {
  props: {
    path: String,
    label: String
  },
  methods: {
    updateButtonData() {
      /**
       * Get the button's bounding rect and the x coordinate and width to the
       * store. Data is consumed in the parent `NavBar` component.
       */
      let item = this.$refs.navItem;
      let domRect = item.getBoundingClientRect();

      this.$store.dispatch('siteElements/updateButtonData', {
        name: this.label,
        data: {
          left: domRect.left,
          width: domRect.width,
        }
      });
    }
  },
  mounted() {
    this.updateButtonData();
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
