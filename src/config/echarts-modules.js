
import Vue from 'vue';
// import echarts from 'echarts';
import echarts from 'echarts/lib/echarts'; // 按需加载，此处只加载核心模块
import theme from './echarts-theme';

// 加载自定义主题
echarts.registerTheme('digital-zj', theme.theme);

// 按需加载 echarts 提供的组件

require('echarts/lib/component/dataset');

require('echarts/lib/chart/line');

require('echarts/lib/chart/bar');

require('echarts/lib/chart/pie');
// 散点图
require('echarts/lib/chart/scatter');

require('echarts/lib/chart/radar');

require('echarts/lib/chart/map');

// require('echarts/lib/chart/tree');

// require('echarts/lib/chart/treemap');

// require('echarts/lib/chart/graph');
// 仪表盘
require('echarts/lib/chart/gauge');

// require('echarts/lib/chart/funnel');

// require('echarts/lib/chart/parallel');

// require('echarts/lib/chart/sankey');

// require('echarts/lib/chart/boxplot');

// require('echarts/lib/chart/candlestick');

require('echarts/lib/chart/effectScatter');

require('echarts/lib/chart/lines');

require('echarts/lib/chart/heatmap');

// require('echarts/lib/chart/pictorialBar');

// require('echarts/lib/chart/themeRiver');

// require('echarts/lib/chart/sunburst');

// require('echarts/lib/chart/custom');

require('echarts/lib/component/grid');

require('echarts/lib/component/polar');

require('echarts/lib/component/geo');

require('echarts/lib/component/singleAxis');

// require('echarts/lib/component/parallel');

// require('echarts/lib/component/calendar');
// 自定义图形
// require('echarts/lib/component/graphic');

require('echarts/lib/component/toolbox');

require('echarts/lib/component/tooltip');
// 坐标轴指示器配置项。
require('echarts/lib/component/axisPointer');

// require('echarts/lib/component/brush');

require('echarts/lib/component/title');

require('echarts/lib/component/timeline');

require('echarts/lib/component/markPoint');

require('echarts/lib/component/markLine');

// require('echarts/lib/component/markArea');

require('echarts/lib/component/legendScroll');

require('echarts/lib/component/legend');

require('echarts/lib/component/dataZoom');

require('echarts/lib/component/dataZoomInside');

// require('echarts/lib/component/dataZoomSlider');

// require('echarts/lib/component/visualMap');

// require('echarts/lib/component/visualMapContinuous');

// require('echarts/lib/component/visualMapPiecewise');

require('zrender/lib/vml/vml');

require('zrender/lib/svg/svg');

Vue.prototype.$echarts = echarts;
