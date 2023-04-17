export default {
  /**
   * 接收window.location,并返回一条对search两次加密后的路径，
   * 解决登录状态失效重新登录后，参数丢失的问题
   * @param {Object} location window.location
   */
  encodeSearch(location) {
    return location.origin
      + location.pathname
      + encodeURIComponent(encodeURIComponent(location.search));
  },
};
