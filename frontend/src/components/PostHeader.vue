<script setup>
import TagPill from "@/components/TagPill";
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: "<Unset Title>"
  },
  timestamp: {
    type: String,
    default: "",
  },
  tags: {
    type: Array,
    default: () => []
  }
});
</script>


<template>
  <div class="post-header type-general">
    <div class="title-wrapper">
      <div class="title">
        <h1>{{ props.title }}</h1>
      </div>
    </div>

    <div class="metadata">
      <div class="tag-list">
        <div 
          v-for="tag in props.tags"
          :key="tag"
          class="tag"
        >
          <TagPill :text="tag" />
        </div>
      </div>

      <div class="timestamp">
        {{ props.timestamp }}
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "@/assets/scss/app.scss";

.post-header {
  grid-column-start: 3;
  grid-column-end: 15;
  height: auto;
}

@include mobile {
  .post-header {
    flex-flow: column;
    margin: 0 10px;
  }
}

@include tablet {
  .post-header {
    flex-flow: column;
    margin: 0 6%;
  }
}

@include desktop {

}

.title-wrapper {
  position: relative;
  width: 100%;
  height: 45px;
  margin-bottom: 16px;

  .title {
    position: absolute;
    height: 40px;
  }
}

.metadata {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.tag-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 16px;
}
</style>
