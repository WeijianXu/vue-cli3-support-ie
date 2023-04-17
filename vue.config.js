/* eslint-disable no-param-reassign */
// const path = require('path');

// vue.config.js
module.exports = {
  publicPath: '/', // datacenter/risk/decision/workportal
  // devServer: {
  //   port: '8080',
  // },
  productionSourceMap: false, // 生产打包时不输出map文件，增加打包速度
  // 需要开启语法转化
  transpileDependencies: [
    // 编译 view-design
    'view-design',
  ],
  configureWebpack: (config) => {
    // 子模块路径别名
    // config.resolve.alias['@zj'] = path.resolve(__dirname, 'src');
    // 设置生产版本去掉 console.log debugger 保留 warn
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log'];
    }
  },
  chainWebpack: (config) => {
    // 增加 javascriptEnabled 配置，否则定制 view-design 时，less会报错
    config.module.rule('less').oneOf('normal').use('less-loader').tap(options => ({
      ...options,
      javascriptEnabled: true,
    }));
  },
};
