module.exports = {
  publicPath: process.env.VUE_APP_BASE_API,
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          quietDeps: true
        }
      }
    }
  }
}
