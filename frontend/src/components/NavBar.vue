<script setup>
import NavItem from '@/components/NavItem.vue';

const pathMap = [
  {
    path: "/garden",
    label: "Garden"
  },
  {
    path: "/projects",
    label: "Projects"
  },
  {
    path: "/about",
    label: "About"
  }
];
</script>


<template>
  <div 
    ref="navbar" 
    class="app-navbar"
  >
    <NavItem
      v-for="item in pathMap"
      :key="item.path"
      :label="item.label"
      :path="item.path"
    />
  </div>
</template>


<style lang="scss" scoped>
.app-navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  height: 16px;
  margin-top: 30px;
  margin-right: 96px;
}
</style>
