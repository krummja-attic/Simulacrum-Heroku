<script setup>
</script>


<template>
  <div class="home">
    <!-- <button class="positive">Test</button>
    <button class="negative">Test</button> -->
  </div>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.home {
  display: flex; 
}

.wrapper {
  display: flex;
  flex-direction: column;
}

@include desktop {
  .home {
    flex-flow: column;
    margin: 3% 12%;
  }
}

button {
  padding: 16px 16px;
  border-radius: 4px;
  font-family: $body-font-family;
  font-size: $body-font-size;
  color: $body-font-color;
  font-weight: 700;

  cursor: pointer;

  &:active {
    transform: scale(0.95) translate3d(0, 0, 0);
  }
}

.positive {
  background-color: $positive-color;

  &:hover {
    background-color: $positive-color-hover;
  }
}

.negative {
  background-color: $negative-color;

  &:hover {
    background-color: $negative-color-hover;
  }
}
</style>
