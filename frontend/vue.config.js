module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/layout.scss";
          @import "@/assets/abstracts/_mixins.scss";
          @import "@/assets/vars/_colors.scss";
          @import "@/assets/vars/_constants.scss";
          @import "@/assets/vars/_themes.scss";
        `
      }
    }
  }
}