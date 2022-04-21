<template>
  <div class="app">
    <div class="container">

      <Header />

      <router-view/>

      <div id="spacer"></div>
      <footer>copyright 2022 - jonathan crum</footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/site/Header';

export default {
  components: {
    Header,
  }
}
</script>

<style lang="scss">
@import url('assets/scss/reset.scss');
@import url('assets/scss/typography.scss');

html {
  height: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 100%;

  body {
    height: 100vh;
    background-color: #212121;
    background-image: url("../public/img/noise_2.png");
  }
}

#app {
  height: 100%;
}

.app {
  height: 100%;

  .container {
    margin: 0 20px;
    background-color: transparent;
    height: 100%;

    display: flex;
    flex-direction: column;

    #spacer {
      flex-grow: 1;
    }

    footer {
      display: flex;
      flex-direction: row;
      margin: auto;
      padding-bottom: 4px;
      font: 14pt 'Gruppo', cursive;
      color: rgba(247, 243, 239, 0.4);
    }
  }
}
</style>
