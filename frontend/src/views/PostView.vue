<script setup>
import { inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import PostHeader from '@/components/PostHeader.vue';
import PostSection from '@/components/PostSection.vue';

const axios = inject('axios');
const route = useRoute();

const title = ref('');
const body = ref('');
const timestamp = ref('');
const tags = ref([]);
const isLoading = ref(false);

async function getContent() {
  const path = 'http://localhost:5000/cms/admin/api';

  isLoading.value = true;

  await axios
    .get(path)
    .then((res) => {
      const postData = res.data[route.params.id];
      title.value = postData.title;
      timestamp.value = postData.created;
      tags.value = parseTagString(postData.tags);
      body.value = postData.body;
      
      isLoading.value = false;
    })
    .catch((err) => {
      console.error(err);
    });
}

function parseTagString(tagString) {
  const tagArray = tagString.split(",");
  return tagArray;
}

onMounted(() => { 
  getContent();
})
</script>


<template>
  <div class="post type-general">
    <div v-if="isLoading">Loading...</div>
    <div v-else class="post-wrapper">
      <PostHeader 
        :title="title" 
        :timestamp="timestamp"
        :tags="tags"
      />
      <PostSection :content="body" />
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "@/assets/scss/app.scss";

.post-wrapper {
  // display: flex;
  display: grid;
  grid-template-columns: repeat(16, 0.2fr);
  grid-template-rows: 120px auto;
  height: auto;
}

@include mobile {
  .post {
    flex-flow: column;
    margin: 0 10px;
  }
}

@include tablet {
  .post {
    flex-flow: column;
    margin: 0 6%;
  }
}

@include desktop {
  .post {
    // flex-flow: column;
    width: 1000px;
  }
}
</style>
