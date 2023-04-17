export default {
  /**
   * 按照如下规则显示数字
   * 1. 不满一万的，显示具体数字；
   * 2. 超过一万的，截取一位小数，如 235000 =》 23.5万
   * 3. 超过一千万的，保留四位万以上数据，如1235000 =》 1234万（四舍五入）；
   * 4. 亿、兆以此类推；
   * 5. 不能大于 Number.MAX_SAFE_INTEGER
   * @param {Number} val 需要定制的整数，不能是小数
   * @param {*} needLocalUnit 是否需要使用“中国”数字表述方式
   */
  formatInteger(val, needLocalUnit = true) {
    const integer = Number.isNaN(val) ? 0 : window.parseInt(val);
    // const positive = integer < 0;
    const v = Math.abs(integer);
    if (!needLocalUnit) {
      // 25000 => 25,000; -25000 => -25,000
      return (integer).toLocaleString();
    }
    // 最多显示四个数字，包括小数位，小数位最多一位
    // 1. 不满一万的，显示具体数字；
    if (v < 10000) {
      // 2500 => 2,500
      return {
        value: (v).toLocaleString(),
        unit: '',
      };
    }
    // 2. 超过一万的，截取一位小数，如 235000 =》 23.5万
    if (v < 10000000) {
      // 2500700 => 250.7
      return {
        value: (v / 10000).toFixed(1).toLocaleString(),
        unit: '万',
      };
    }
    // 3. 超过一千万的，保留四位万以上数据，如1235000 =》 1234万（四舍五入）；
    if (v < 100000000) {
      return {
        value: (v / 10000).toFixed(0).toLocaleString(),
        unit: '万',
      };
    }
    if (v < 100000000000) {
      return {
        value: (v / 100000000).toFixed(1).toLocaleString(),
        unit: '亿',
      };
    }
    // 3. 超过一千亿的，保留四位万以上数据，如1235000 =》 1234万（四舍五入）；
    if (v < 1000000000000) {
      return {
        value: (v / 100000000).toFixed(0).toLocaleString(),
        unit: '亿',
      };
    }
    // 超过一兆的，但是需要小于最大表示值，大概 900兆
    if (v < Number.MAX_SAFE_INTEGER) {
      // 2500700 => 250.7
      return {
        value: (v / 1000000000000).toFixed(1).toLocaleString(),
        unit: '兆',
      };
    }
    // 超过最大数，返回空
    return {
      value: '',
      unit: '',
    };
  },

  /**
   * 将传入值格式化，如：
   * 1. 13500 => 13,500;
   * @param {Number|String} val 数字或数字型字符串
   */
  toLocaleString(val) {
    const numb = Number.isNaN(val) ? 0 : Number(val);
    // 25000 => 25,000; -25000 => -25,000
    return (numb).toLocaleString();
  },

  /**
   * 求 a / b 百分数，默认保留两位小数
   * @param {Number} a 分子
   * @param {Number} b 分母
   * @param {Number} scale 小数位数
   */
  percent(a = 0, b = 1, scale = 2) {
    if (b === 0) {
      return 0;
    }
    const remainder = (a * 100) % b;
    const quotient = (a * 100) / b;
    return remainder === 0 ? quotient : Number(quotient.toFixed(scale));
  },

};
