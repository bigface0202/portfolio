const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  },
  outputDir: 'docs',
  assetsDir: 'docs/img',
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'
})
