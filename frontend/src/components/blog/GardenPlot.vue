<script setup>
import TagPill from "@/components/elements/TagPill.vue";
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Placeholder Title",
  },
  timestamp: {
    type: String,
    default: "April 25, 2020 at 7:49pm"
  },
  tags: {
    type: Array,
    default: () => [
      'Digital Gardening',
      'Design'
    ]
  },
});
</script>


<template>
  <div class="garden-plot type-general">
    
    <div class="title-wrapper">
      <div class="title">
        <h1><a>{{ props.title }}</a></h1>
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

    <div class="preview">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div class="preview-fade" />
    </div>
  </div>
</template>


<style scoped lang="scss">

.garden-plot {
  display: flex;
  flex-direction: column;
  width: 650px;
  height: auto;
  padding: 16px 20px 26px 20px;
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

.preview {
  position: relative;
  margin-top: 16px;
  text-align: justify;
  max-height: 75px;
  overflow: hidden;
  transition: all 0.15s ease-in;

  .preview-fade {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 25px;
    width: 100px;
    text-align: center;
    background-image: linear-gradient(to right, transparent, var(--primary-background-color));
  }
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
</style>
