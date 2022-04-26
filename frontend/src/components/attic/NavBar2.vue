<script setup>
import NavItem from '@/components/site/NavItem.vue';

const pathMap = [
  {
    path: "/",
    label: "home"
  },
  {
    path: "/blog",
    label: "blog"
  },
  {
    path: "/projects",
    label: "projects"
  },
  {
    path: "/about",
    label: "about"
  }
];
</script>


<template>
  <div class="navbar">
    <NavItem
      v-for="item in pathMap"
      :key="item.path"
      :ref="item.label"
      :label="item.label"
      :path="item.path"
    />
  </div>
</template>


<style lang="scss" scoped>

.navbar {
  display: flex;
}

@include tablet {
  .navbar {
    flex-direction: row;
  }
}

@include desktop {
  .navbar {
    flex-direction: column;
    justify-content: space-between;

    gap: 20px;
    width: 225px;
    margin-top: 20px;
    margin-left: 10px;
  }
}
</style>
