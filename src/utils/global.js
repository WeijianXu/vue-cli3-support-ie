/**
 * 收集或设置一些对 window 上的属性进行的操作
 */
export default {
  /**
   * ### 判断浏览器是否是IE浏览器；
   * 1. 是返回版本号；
   * 2. 若是 Edge 浏览器，返回 edge；
   * 2. 否则是返回 -1；
   */
  ieVersion() {
    const { userAgent } = navigator; // 取得浏览器的userAgent字符串
    const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1; // 判断是否IE<11浏览器
    const isEdge = userAgent.indexOf('Edge') > -1 && !isIE; // 判断是否IE的Edge浏览器
    const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
    if (isIE) {
      const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
      reIE.test(userAgent);
      const fIEVersion = parseFloat(RegExp.$1);
      if (fIEVersion === 7) {
        return 7;
      } if (fIEVersion === 8) {
        return 8;
      } if (fIEVersion === 9) {
        return 9;
      } if (fIEVersion === 10) {
        return 10;
      }
      return 6;// IE版本<=7
    } if (isEdge) {
      return 'edge';// edge
    } if (isIE11) {
      return 11; // IE11
    }
    return -1;// 不是ie浏览器
  },
  /**
   * ### 获取现代浏览器版本号
   * 1. 可选值 Edge、Firefox、OPR、Chrome、Safari
   * @param {String} browswr 现代浏览器名称
   */
  getModernBrowserVer(browswr) {
    const ver = navigator.userAgent.split(`${browswr}/`)[1];
    return ver ? ver.split('.')[0] : -1;
  },
  /**
   * 获取当前浏览器类型及其版本号
   * 1. 返回 IE、Edge、Firefox、Opera、Chrome、Safari浏览器名称和版本号；
   * 2. 非上述浏览器，返回 -1；
   */
  browserVersion() {
    const { userAgent } = navigator; // 取得浏览器的userAgent字符串
    const ieV = this.ieVersion();
    const isFirefox = userAgent.indexOf('Firefox') > -1; // Firefox浏览器
    const isOpera = userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1; // Opera浏览器
    const isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Edge') === -1 && userAgent.indexOf('OPR') === -1; // Chrome浏览器
    const isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1 && userAgent.indexOf('Edge') === -1 && userAgent.indexOf('OPR') === -1; // Safari浏览器
    if (ieV !== -1 && ieV !== 'edge') {
      return `IE${ieV}`;
    }
    if (ieV === 'edge') {
      return `Edge${this.getModernBrowserVer('Edge')}`;
    }
    if (isFirefox) {
      return `Firefox${this.getModernBrowserVer('Firefox')}`;
    }
    if (isOpera) {
      return `Opera${this.getModernBrowserVer('OPR')}`;
    }
    if (isChrome) {
      return `Chrome${this.getModernBrowserVer('Chrome')}`;
    }
    if (isSafari) {
      return `Safari${this.getModernBrowserVer('Safari')}`;
    }
    return -1;// 未知浏览器
  },
};
