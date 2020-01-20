import ArticalCard from './ArticalCard.vue';

import filter from './filter';

const components = {
  // 文案、数据展示类组件
  ArticalCard,
};


// eslint-disable-next-line no-multi-assign
export default {
  install(Vue/* , opts = {} */) {
    if (this.installed) return;

    Object.keys(components).forEach((key) => {
      Vue.component(`X${key}`, components[key]);
    });

    // 注册全局的filter函数
    filter(Vue);
  },
};
