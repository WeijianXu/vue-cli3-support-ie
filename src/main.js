import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 按需加载 element-UI
import './config/ele-components';
// 按需导入 echarts
import './config/echarts-modules';
// 导入按需加载的 view-design
import './config/view-components';


// 加载项目通用组件
import ui from './components';

Vue.config.productionTip = false;

Vue.use(ui); // 使用通用组件

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
