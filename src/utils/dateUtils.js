export default {

  /**
   * 校验当前值是否是正确的时间格式
   * 1. 是，则返回标准时间对象；
   * 2. 否则，返回 null
   * @param {Number|String|Date} d 符合规范的时间格式
   */
  checkValid(d) {
    let date = new Date(d);
    // eslint-disable-next-line eqeqeq
    if (d instanceof Date) {
      date = d;
      // eslint-disable-next-line eqeqeq
    } else if (!!d && new Date(d) != 'Invalid Date') {
      date = new Date(d);
    } else {
      // d 存在值，返回该值，否则返回空
      return null;
    }
    return date;
  },

  /**
   * 计算当前时间所经历的起至月份，起点月份为一月
   * @param {Date} date 时间对象
   */
  getStartAndEndMonth(date = new Date()) {
    const year = date.getFullYear();
    const month = date.getMonth();
    return {
      startMonth: `${year}01`,
      endMonth: `${year}${month < 9 ? '0' : ''}${month + 1}`,
    };
  },

  /**
   * 计算上一年所经历的起至月份，起点月份为一月，终止月份为12月
   * @param {Date} date 时间对象
   */
  getStartAndEndMonthOfLastYear() {
    const lastYear = (new Date().getFullYear()) - 1;
    return {
      startMonth: `${lastYear}01`,
      endMonth: `${lastYear}12`,
    };
  },

  /**
   * 格式化时间
   * @param {Number|String|Date} d 符合规范的时间格式
   * @param {String} formatter 需要定制的时间格式模板
   */
  dateFomat(d, formatter = 'yyyy-MM-dd') {
    const date = this.checkValid(d);
    if (!date) {
      return d || '';
    }
    let fmt = formatter;
    const o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
    }
    Object.keys(o).forEach((k) => {
      if (new RegExp(`(${k})`).test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : (`00${o[k]}`).substr((`${o[k]}`).length));
      }
    });
    return fmt;
  },

  /**
   * 判断当前时间是否大于等于 9999-12-31
   * @param {Number|String|Date} d 符合规范的时间格式
   */
  checkLong(d) {
    const date = this.checkValid(d);
    if (!date) {
      return false;
    }
    const time = date.getTime();
    // new Date('9999-12-31').getTime() => 253402214400000
    return time >= 253402214400000;
  },
};
