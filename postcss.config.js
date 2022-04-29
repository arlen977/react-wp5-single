const postcssNormalize = require('postcss-normalize');

module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
      }
    ],
    postcssNormalize(),
    // require('postcss-pxtorem')({
    //   rootValue: 72,
    //   unitPrecision: 5,
    //   replace: true,
    //   mediaQuery: false,
    //   minPixelValue: 0,
    //   selectorBlackList: [], //过滤
    //   propList: ['*'],
    // }),
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
    })
  ],
};
