<template>
  <div class="header">
    <div class="header-view">
      <div class="header-view-top">
        <Logo />
        <div class="logo-text">
          <h1>simulacrum</h1>
        </div>
      </div>
      <div class="header-view-bottom">
        <NavBar />
      </div>
    </div> <!-- /header-view -->
  </div> <!-- /header -->
</template>

<script>
import NavBar from '@/components/site/NavBar';
import Logo from '@/components/site/Logo';

export default {
  components: {
    NavBar,
    Logo,
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 0 5px 0;

  &-view {
    margin: 0 12%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 2px solid rgba(247, 243, 239, 0.5);

      .logo-text {
        position: relative;
        width: 100%;
        height: inherit;
        top: 0;
        bottom: 0;

        h1 {
          position: absolute;
          bottom: 0;
          right: 0;
          margin-bottom: 5px;
          text-align: center;
          font: 60pt 'Megrim', monospace;
          color: rgba(247, 243, 239, 0.5);
        }
      }
    }

    &-bottom {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding: 4px 0;
    }
  }
}
</style>
