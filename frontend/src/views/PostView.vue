<script setup>
import { inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const axios = inject('axios');
const route = useRoute();

const title = ref('');
const body = ref('');

async function getContent() {
  const path = 'http://localhost:5000/cms/admin/api';

  await axios
    .get(path)
    .then((res) => {
      const postData = res.data[route.params.id];
      title.value = postData.title;
      body.value = postData.body;
    })
    .catch((err) => {
      console.error(err);
    });
}

onMounted(() => { 
  getContent();
})
</script>


<template>
  <div class="post">
    <h1>{{ title }}</h1>
    <p>{{ body }}</p>
  </div>
</template>


<style scoped lang="scss">
.post {
  display: flex;
  height: auto;
}
</style>
