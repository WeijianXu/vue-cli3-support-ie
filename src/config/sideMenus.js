import { menu } from '../layout';

/**
 * 左侧侧边栏菜单，只支持两级菜单显示
 * 第三级菜单不会显示，
 * 但是面包屑会显示第三级菜单
 */
export default [
  menu({ name: 'workportal', text: '工作门户', to: '/workportal/' }),
  menu({ name: 'risk', text: '风险预警', to: '/risk/' }),
  menu({
    name: 'decision',
    text: '决策支持',
    to: '/decision/',
    children: [
      menu({ name: 'performance', text: '效能总览', to: '/decision/jg/portal/performance' }),
    ],
  }),
  menu({ name: 'datacenter', text: '监管数据中心', to: '/datacenter/' }),
];
