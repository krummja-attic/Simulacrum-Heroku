<script>
import Panel from '@/components/site/Panel.vue';
import { gsap } from 'gsap';

export default {
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
        },
        {
          title: "Test Title",
          body: "This is some simple test content."
        },
        {
          title: "Test Title",
          body: "This is some simple test content."
        },
        {
          title: "Test Title",
          body: "This is some simple test content."
        },
        {
          title: "Test Title",
          body: "This is some simple test content."
        },
      ]
    }
  },
  mounted() {
    this.$store.dispatch("siteElements/setActiveButton", this.$route.name);
  },
  beforeRouteLeave(to, from) {}
}
</script>

<template>
  <div ref="componentRoot" class="blog">
    <div class="blog-view">
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
.blog {
  &-view {
    display: flex;
    flex-flow: row wrap;
    margin: 3% 12%;
  }
}
</style>