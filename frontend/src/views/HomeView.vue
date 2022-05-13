<script setup>
</script>


<template>
  <div class="home">
    <div />
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
  color: var(--primary-text-color);
  font-weight: 700;

  cursor: pointer;

  &:active {
    transform: scale(0.95) translate3d(0, 0, 0);
  }
}

.positive {
  background-color: var(--positive-color);

  &:hover {
    background-color: var(--positive-color-hover);
  }
}

.negative {
  background-color: var(--negative-color);

  &:hover {
    background-color: var(--negative-color-hover);
  }
}
</style>
