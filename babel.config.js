module.exports = {
  /* presets: [
    '@vue/cli-plugin-babel/preset',
  ], */
  presets: [
    // web 和 移动端均可访问
    ['@vue/app', {
      // 目标环境不需要这些多填充，则会自动排除这些多的填充。
      useBuiltIns: 'usage',
      /* polyfills: [
        'es6.promise',
        'es6.symbol',
      ], */
    }],
  ],
  plugins: [
    [
      // 按需加载 view-design
      'import',
      {
        libraryName: 'view-design',
        libraryDirectory: 'src/components',
      },
    ],
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
};
