module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': 'off',
    // iview 中关闭自闭合标签校验
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    // 关闭垫片校验
    // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
