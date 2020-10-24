// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack')

module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/basic/_variables.scss";`,
      },
    },
  },
  configureWebpack: () => ({
    plugins: [
      new webpack.DefinePlugin({
        'process.env.VERSION': JSON.stringify(
          require('./package.json').version,
        ),
      }),
    ],
  }),
}
