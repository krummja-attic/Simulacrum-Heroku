<template>
  <div id="app">

    <!-- TODO Make a separate component -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <router-view/>

    <div id="spacer"></div>
    <footer></footer>
  </div>
</template>

<style lang="scss">
@import url('assets/scss/reset.scss');

html {
  height: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  body {
    height: 100%;
    background-color: rgba(21, 21, 21, 1.0);
    color: rgba(247, 243, 239, 1.0);
    transition: background-color 0.6s;
  }
}

#app {
  margin: 0 auto;
  background-color: transparent;
  height: 100%;

  display: flex;
  flex-direction: column;

  #spacer {
    flex-grow: 1;
  }
}
</style>
