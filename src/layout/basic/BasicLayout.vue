<template>
  <Layout :class="pre">
    <BasicHeader
      :header-menus="headerMenus"
      :title="projectName"
      :default-name="defaultSideMenu"
      :username="userInfo.username"
      :class="`${pre}__header`"
      @userMenuClick="onUserMenuClick"
    >
      <template v-slot:beforeUser>
        <slot name="headerBeforeUser"></slot>
      </template>
    </BasicHeader>
    <Layout :class="`${pre}__main`">
      <Sider hide-trigger :class="`${pre}__side`">
        <BasicMenu :data="headerMenus" :default-name="defaultSideMenu" :open-names="openMenuNames">
        </BasicMenu>
      </Sider>
      <Content :class="`${pre}__page`">
        <slot></slot>
      </Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
</template>

<script>
import BasicMenu from './BasicMenu';
import BasicHeader from './BasicHeader';

import { headerMenus, getMenus, getPath } from '../const';
import { projectName, uiPre } from '../../config/env';

export default {
  name: 'BasicLayout',
  components: {
    BasicMenu,
    BasicHeader,
  },
  props: {
    userInfo: {
      type: Object,
      default() {
        return {
          username: '',
        };
      },
    },
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
  watch: {
    $route(newRoute) {
      const { currMenuName, openMenuNames } = this.getCurrMenu(newRoute);
      // 根据当前匹配的路径表得到面包屑路径数据
      this.defaultSideMenu = currMenuName;
      this.openMenuNames = openMenuNames;
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
    onUserMenuClick(menuName) {
      this.$emit('userMenuClick', menuName);
    },
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
  .#{$pre}#{$name}__header {
    height: $layout-header-height;
  }
  .#{$pre}#{$name}__main {
    margin-top: $layout-header-height;
    overflow: hidden;
  }
  .#{$pre}#{$name}__side {
    padding-top: $gap;
    background: $white;
    box-shadow: 2px 0px $shadow-y rgba(21, 101, 167, 0.2);
    overflow-y: auto;
  }
  .ivu-layout-content {
    padding: $gap-medium $gap;
  }
}
</style>
