<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import ContentPanel from '@/components/content/ContentPanel';

const posts = [
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
];

onMounted(() => {
  const store = useStore();
  const route = useRoute();
  store.dispatch("siteElements/setActiveButton", route.name);
});
</script>


<template>
  <div 
    ref="componentRoot" 
    class="blog"
  >
    <ContentPanel 
      v-for="post in posts" 
      :key="post"
      :title="post.title"
      :body="post.body"
    />
  </div>
</template>


<style lang="scss" scoped>
.blog {
  display: flex;
}

@include mobile {
  .blog {
    flex-flow: column;
    margin: 0 10px;
  }
}

@include tablet {
  .blog {
    flex-flow: row wrap;
    margin: 0 6%;
  }
}

@include desktop {
  .blog {
    flex-flow: row wrap;
    margin: 3% 12%;
  }
}
</style>