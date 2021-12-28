module.exports = {
  publicPath: process.env.APP_BASE_URL,
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false
}
