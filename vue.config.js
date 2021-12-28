module.exports = {
  // publicPath: process.env.APP_BASE_URL,  // actions with npm
  publicPath: '/', // actions with yarn
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false
}
