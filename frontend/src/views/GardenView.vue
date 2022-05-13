<script setup>
import GardenPlot from "@/components/blog/GardenPlot.vue";
</script>


<template>
  <div 
    ref="componentRoot" 
    class="garden"
  > 
    <div class="garden-wrapper">
      <GardenPlot />
      <GardenPlot title="Some Much Longer Cooler Title" />
      <GardenPlot title="Another Title, But Different" />
      <GardenPlot />
      <GardenPlot />
      <GardenPlot />
      <GardenPlot />
      <GardenPlot />
      <GardenPlot />
      <GardenPlot />
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