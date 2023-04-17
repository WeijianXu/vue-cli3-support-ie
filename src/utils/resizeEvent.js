/**
 * 全局管理 window.onresize 事件，避免一个页面多次注册，导致失效
 */
class ResizeEvent {
  events = {};

  constructor() {
    this.init();
  }

  init() {
    window.onresize = () => {
      // clearTimeout(this.resizeTimer);
      // 避免频繁出发resize事件
      this.resizeTimer = setTimeout(() => {
        Object.keys(this.events).forEach((k) => {
          try {
            if (typeof this.events[k] === 'function') {
              this.events[k]();
            }
          } catch (e) {
            // 出现这种错误时，很多是因为没有在页面或组件卸载时，使用 remove 取消订阅
            console.warn('window.onresize error. ', k, this.events[k]);
            // 主动取消订阅
            this.remove(k);
          }
        });
      }, 200);
    };
  }

  subscribe(name, callback) {
    this.events[name] = callback;
  }

  remove(name) {
    delete this.events[name];
  }
}

export default new ResizeEvent();
