<script setup>
import { inject, onMounted, ref } from 'vue';
import GardenPlot from "@/components/blog/GardenPlot.vue";

const axios = inject('axios');

let posts = ref([]);

async function getPosts() {
  const path = 'http://localhost:5000/cms/admin/api';
  await axios
    .get(path)
    .then((res) => {
      for (let i = 0; i < Object.keys(res.data).length; i++) {
        let postData = res.data[i + 1];
        posts.value.push(postData);
      }
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
  getPosts();
})
</script>


<template>
  <div 
    ref="componentRoot" 
    class="garden"
  > 
    <div class="garden-wrapper">
      <GardenPlot
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :timestamp="post.created"
        :tags="parseTagString(post.tags)"
        :body="post.body"
      />
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.garden {
  display: flex;
  height: auto;
}

.garden-wrapper {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 32px;
  width: 100%;
}

@include mobile {
  .garden {
    flex-flow: column;
    margin: 0 10px;
  }
}

@include tablet {
  .garden {
    flex-flow: row wrap;
    margin: 0 6%;
  }
}

@include desktop {
  .garden {
    flex-flow: row wrap;
    margin: 3% 12%;
  }
}
</style>