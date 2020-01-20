/**
 * 定义全局的Vue filter 函数
 * @param {Vue} Vue Vue实例
 */
export default function (Vue) {
  // 截断当前字符，默认最大长度为 100
  Vue.filter('slice', (str, maxLen = 100) => (str ? `${(`${str}`).slice(0, maxLen)}${(maxLen < str.length ? ' ...' : '')}` : ''));
}
