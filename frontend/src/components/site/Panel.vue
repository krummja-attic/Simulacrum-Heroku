<script>
export default {
  name: "panel",
  props: {
    title: String,
    body: String,
  }
}
</script>

<template>
  <div class="panel">
    <div class="panel-view">
      <h2>{{ title }}</h2>
      <p>{{ body }}</p>
    </div>
  </div>  
</template>

<style lang="scss" scoped>
$aberration: 6px;

.panel {
  flex-basis: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 350px;
  width: 350px;
  margin: 10px;
  padding: 2rem;

  background-color: rgba(21, 21, 21, 1);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  color: rgba(247, 243, 239, 1);

  transition-property: box-shadow, transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier();

  &:hover {
    transform: translateY(-0.5rem);
  }

  &-view {
    h2 {
      font: 26pt "Gruppo", sans-serif;
    }
  }
}
</style>
