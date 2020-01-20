<template>
  <Layout :class="pre">
    <Header>
      <!-- <Menu mode="horizontal" theme="primary" active-name="home">
        <MenuItem name="home" to="/">
          <Icon type="ios-home-outline" />
          首页
        </MenuItem>
        <Submenu name="support">
          <template slot="title">
            <Icon type="ios-stats" />
            兼容IE
          </template>
          <MenuGroup title="ui">
            <MenuItem name="view-design" to="/support/iview">View design</MenuItem>
            <MenuItem name="element ui" to="/support/ele">Element UI</MenuItem>
          </MenuGroup>
        </Submenu>
        <MenuItem name="about" to="/about">
          <Icon type="ios-people" />
          关于我们
        </MenuItem>
      </Menu> -->
      <BasicMenu
        mode="horizontal"
        theme="primary"
        :data="headerMenus"
        :default-name="defaultSideMenu"
      ></BasicMenu>
    </Header>
    <Layout>
      <Sider hide-trigger>
        <BasicMenu :data="headerMenus" :default-name="defaultSideMenu" :open-names="openMenuNames">
        </BasicMenu>
      </Sider>
      <Content>
        <router-view />
      </Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
</template>

<script>
import BasicMenu from './BasicMenu';

import { headerMenus, getMenus, getPath } from '../const';
import { projectName, uiPre } from '../../config/env';

export default {
  name: 'BasicLayout',
  components: {
    BasicMenu,
  },
  props: {
    sideWidth: {
      type: Number,
      default: 240,
    },
    sideMenus: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    const { currMenuName, openMenuNames } = this.getCurrMenu(this.$route);
    return {
      pre: `${uiPre}basicLayout`,
      headerMenus: headerMenus(),
      projectName,
      // 当前应当点亮的侧边栏
      defaultSideMenu: currMenuName,
      openMenuNames,
    };
  },
  methods: {
    // 获取当前需点亮的菜单路由路径，和需要打开的菜单名列表
    getCurrMenu($route) {
      // this.menusMap = {};
      const currMenu = {};
      const openMenuNames = [];

      // 迭代获取到菜单映射表和当前匹配的路径表
      getMenus(this.sideMenus, currMenu, 0, $route.path); // window.location.pathname;
      // 根据当前匹配的路径表设置侧边栏点亮的菜单
      const currMenuPath = getPath(currMenu);
      currMenuPath.forEach((menu, idx) => {
        // 最后一个不用加入到打开的菜单列表中
        if (idx < currMenuPath.length - 1) {
          openMenuNames.push(menu.name);
        }
      });
      let currMenuName = '';
      if (currMenuPath.length === 1 || (currMenuPath[0] && currMenuPath[0].hideChildren)) {
        // 一层，侧边栏点亮该层菜单；或是两层，但是子菜单隐藏了，则点亮第一级菜单
        currMenuName = currMenuPath[0].name;
      } else if (currMenuPath.length === 2) {
        // 二层，侧边栏点亮该层菜单；
        currMenuName = currMenuPath[1].name;
      } else if (currMenuPath.length > 2) {
        // 超过三层，侧边栏只点亮第二层；
        currMenuName = currMenuPath[1].name;
      }
      return { currMenuName, openMenuNames };
    },
  },
};
</script>

<style lang="scss">
@import "@/theme/variants";
// @import "@/theme/mixins";

$name: "basicLayout";
.#{$pre}#{$name} {
  height: 100%;

  .ivu-layout-content {
    padding: $gap-medium $gap;
  }
}
</style>
