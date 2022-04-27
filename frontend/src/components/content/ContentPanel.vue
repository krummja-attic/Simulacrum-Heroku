<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: ""
  },
  body: {
    type: String,
    default: ""
  }
});
</script>


<template>
  <div class="panel">
    <div class="panel-content">
      <h2>{{ title }}</h2>
      <p>{{ body }}</p>
    </div>
  </div>  
</template>


<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

$aberration: 6px;
$margin: 10px;

.panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: $margin;
  height: 200px;
  
  // @include cut-corners(45px);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);

  &:hover {
    transform: translateY(-0.5rem);
  }

  &-content {
    height: 100%;
    
    background-color: $nero;
    color: $papier;

    h2 {
      font-family: "Gruppo", sans-serif;
    }
  }
}

@include mobile {
  .panel {

  }

  .panel-content {
    padding: 1rem;

    h2 {
      font-size: 20pt;
    }
  }
}

@include tablet {
  .panel {
    width: calc(100% - ($margin * 2));
  }

  .panel-content {
    padding: 1rem;

    h2 {
      font-size: 24pt;
    }
  }
}

@include desktop {
  .panel {
    width: calc(50% - ($margin * 2));
  }

  .panel-content {
    h2 {
      font-size: 26pt;
    }
  }
}
</style>
