<script>
import Panel from '@/components/site/Panel.vue';

export default {
  name: 'home',
  components: {
    Panel
  },
  data() {
    return {
      posts: [
        {
          title: "Test Title",
          body: "This is some simple test content."
        },
        {
          title: "Test Title",
          body: "This is some simple test content."
        }
      ]
    }
  },
  mounted() {
    this.$store.dispatch("siteElements/setActiveButton", this.$route.name);
  }
}
</script>

<template>
  <div class="home">
    <div class="home-view">
      <Panel 
        v-for="post in posts" 
        :key="post"
        :title="post.title"
        :body="post.body"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &-view {
    margin: 0 12%;

    display: flex;
    flex-direction: row wrap;
  }
}
</style>
