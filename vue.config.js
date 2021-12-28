module.exports = {
  publicPath: process.env.BASE_URL,
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false
}
