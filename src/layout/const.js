/**
 * 菜单生成器函数
 * @param {Object} options 配置项
 */
export const menu = options => Object.assign({
  text: '', // 文本描述
  name: '', // 名称，唯一，首页请配置名称为 home
  icon: '', // 图标
  to: '', // 跳转路径
  children: null, // 是否含有子菜单
  width: 'auto', // 宽度设置
  show: true, // 是否显示菜单项
  hideChildren: false, // 是否隐藏子菜单
}, options || {});

// 最多支持两级菜单
export const headerMenus = () => [
  menu({ name: 'home', text: '首页', to: '' }),
  menu({
    name: 'risk',
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

/**
 * 根据当前路径 currPath 和菜单详情列表，
 * 获取到当前路径所在的菜单项
 * @param {Array}  menus    当前菜单数据
 * @param {Object} currMenu 当前菜单层级数据
 * @param {Number} level    当前菜单层级
 * @param {Object} currPath 当前路由路径值
 */
export function getMenus(menus, currMenu, level, currPath) {
  for (let i = 0; i < menus.length; i += 1) {
    const {
      to, children, show,
    } = menus[i];
    if (show) {
      // 先序查找。当前路径包含菜单路径，
      if (to && currPath.indexOf(to) !== -1) {
        // eslint-disable-next-line no-param-reassign
        currMenu[level] = {
          ...menus[i],
          isCurrent: true,
        };
        // 已经找到此路径
        // 该菜单为完全匹配节点，退出本次迭代；
        // 否则继续查找子菜单，直至完全找到该菜单或没有子节点
        if (currPath === to) {
          return;
        }
      }
      // 深度优先搜索
      if (children && children.length) {
        // eslint-disable-next-line no-param-reassign
        currMenu[level] = {};
        getMenus(children, currMenu, level + 1, currPath);
      }
      // 后序查找。子集菜单已经匹配到了当前路径
      if (currMenu[level + 1] && currMenu[level + 1].isCurrent) {
        // eslint-disable-next-line no-param-reassign
        currMenu[level] = {
          ...menus[i],
          isCurrent: true,
        };
        // 已经找到此路径，退出本次迭代；
        return;
      }
    }
  }
}

// 根据当前匹配的路径表得到面包屑路径数据
export function getPath(currMenu) {
  const currMenuPath = [];
  Object.keys(currMenu).forEach((k) => {
    if (currMenu[k] && currMenu[k].isCurrent) {
      currMenuPath.push(currMenu[k]);
    }
  });
  return currMenuPath;
}
