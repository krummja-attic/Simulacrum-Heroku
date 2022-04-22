module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/abstracts/_mixins.scss";
          @import "@/assets/vars/_colors.scss";
        `
      }
    }
  }
}