import { menu } from '../layout';

/**
 * 左侧侧边栏菜单，只支持两级菜单显示
 * 第三级菜单不会显示，
 * 但是面包屑会显示第三级菜单
 */
export default [
  menu({ name: 'home', text: '首页', to: '/index' }),
  menu({
    name: 'support',
    text: '兼容IE',
    to: '',
    children: [
      menu({ name: 'iview', text: 'View design', to: '/support/iview' }),
      menu({ name: 'ele', text: 'Element UI', to: '/support/ele' }),
    ],
  }),
  // menu({ name: 'decision', text: '决策支持', to: `${originPath}/decision/` }),
  menu({ name: 'about', text: '关于我们', to: '/about' }),
];
