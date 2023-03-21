const path = require('path');
const { defineConfig } = require('@vue/cli-service');
const CopyPlugin = require('copy-webpack-plugin');
const partytown = require('@builder.io/partytown/utils');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [{
          from: partytown.libDirPath(),
          to: path.join(__dirname, 'public', '~partytown'),
        }],
      }),
    ],
  },

});
