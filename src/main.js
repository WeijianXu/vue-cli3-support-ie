import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 按需加载 element-UI
import './config/ele-components';
// 按需导入 echarts
// import './config/echarts-modules';
// 导入按需加载的 view-design
import './config/view-components';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
