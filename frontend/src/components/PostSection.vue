<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  content: {
    type: String,
    default: ""
  }
});
</script>


<template>
  <div class="post-section type-general">
    <section>
      <p>
        {{ props.content }}
      </p>
    </section>
  </div>
</template>


<style scoped lang="scss">
@import "@/assets/scss/app.scss";

.post-section {
  grid-column-start: 3;
  grid-column-end: 15;
  grid-row-start: 2;
  grid-row-end: 3;
  height: auto;
}

@include mobile {
  .post-section {
    flex-flow: row;
    margin: 0 10px;
  }
}

@include tablet {
  .post-section {
    flex-flow: row;
    margin: 0 6%;
  }
}

@include desktop {
  
}
</style>
