import regExp from './regExp';

export default {
  /**
   * 将对象的属性转化成对应的列表形式
   * @param {Object} map 对象结构
   * @param {String} keyAttr 转化后的键名
   * @param {String} valAttr 转化后的键值名
   * @param {Object} rest 二外需要增加的对象，将合并到每个转化后的列表元素中国
   */
  /**
   * 将对象的属性转化成对应的列表形式
   * @param {Object} map 对象结构
   * @param  {Function} rest 函数返回额外需要增加的属性
   */
  mapToArray(map = {}, options = {}) {
    // 转化后的键名, 转化后的键值名
    const { keyAttr = 'name', valAttr = 'value', formatter } = options;
    return Object.keys(map).map((k, i) => {
      const extra = typeof formatter === 'function' ? formatter({ k, i, val: map[k] }) : {};
      return {
        [keyAttr]: k,
        [valAttr]: map[k],
        ...extra,
      };
    });
  },

  /**
   * 將給定的Map对象的属性值转变成特定的属性值
   * @param {Object} map 對象結構
   * @param {Object} options 配置項，包括 defaultVal/formatter等
   */
  transMapVals(map = {}, options) {
    // 转化后的键名, 转化后的键值名
    const { defaultVal = {}, formatter } = options;
    const newMap = {};
    Object.keys(map).forEach((k, i) => {
      newMap[k] = typeof formatter === 'function' ? formatter(k, i, map[k]) : defaultVal;
    });
    return newMap;
  },

  formatUser(val) {
    if (regExp.isPhoneNum(val)) {
      return val.replace(regExp.phoneReg, '$1****$3');
    }
    return val;
  },
};
