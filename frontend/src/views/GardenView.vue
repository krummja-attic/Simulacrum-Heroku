<script setup>
</script>


<template>
  <div 
    ref="componentRoot" 
    class="garden"
  >
    <!--  -->
  </div>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.garden {
  display: flex;
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