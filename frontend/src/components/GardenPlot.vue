<script setup>
import TagPill from "@/components/TagPill.vue";
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: Number
  },
  title: {
    type: String,
    default: "<Unset Title>",
  },
  timestamp: {
    type: String,
    default: "<Unset Timestamp>",
  },
  tags: {
    type: Array,
    default: () => [
      'Digital Gardening',
      'Design'
    ]
  },
  body: {
    type: String,
    default: "<Empty>",
  }
});
</script>


<template>
  <div class="garden-plot type-general">
    
    <div class="title-wrapper">
      <div class="title">
        <transition
          mode="out-in"
          name="fade"
        >
          <h1>
            <router-link :to="'/garden/' + props.id">
              {{ props.title }}
            </router-link>
          </h1>
        </transition>
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
      <p>{{ props.body }}</p>
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
  max-height: 70px;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
