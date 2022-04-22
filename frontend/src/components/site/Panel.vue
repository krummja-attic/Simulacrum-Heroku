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
$margin: 10px;

.panel {
  flex-basis: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: $margin;
  height: 200px;
  width: calc(50% - ($margin * 2));
  
  @include cut-corners(45px);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier();

  &:hover {
    transform: translateY(-0.5rem);
  }

  &-view {
    position: relative;
    width: 100%;
    height: 100%;
    inset: 0;
    background-color: $nero;
    padding: 2.5rem 3rem;
    color: $papier;
    
    h2 {
      font: 26pt "Gruppo", sans-serif;
    }
  }
}
</style>
