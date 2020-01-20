<template>
  <Breadcrumb separator=">">
    <!-- 第一项默认是当前系统首页 -->
    <!-- <BreadcrumbItem v-if="!noHomeBread" :to="homeInfo.path">
      {{ homeInfo.name }}
    </BreadcrumbItem> -->
    <!-- 最后一项无跳转 -->
    <BreadcrumbItem
      v-for="(path, idx) in currMenuPath"
      :key="path.name"
      :to="idx !== currMenuPath.length - 1 ? path.to : ''"
    >{{ path.text }}</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
import { getMenus, getPath } from '../const';

export default {
  props: {
    // 全部路由数据，以便知道当前是在哪个路由层级
    menus: {
      type: Array,
      default() {
        return [];
      },
    },
    // 首页信息
    /* homeInfo: {
      type: Object,
      default() {
        return {
          name: '首页',
          path: '/',
        };
      },
    }, */
  },
  data() {
    const { /* noHomeBread,  */currMenuPath } = this.getCurrMenuPath(this.$route);
    return {
      currMenuPath, // 当前路由对应的路径表
      // noHomeBread,
    };
  },
  watch: {
    $route(newRoute) {
      const { /* noHomeBread,  */currMenuPath } = this.getCurrMenuPath(newRoute);
      // 根据当前匹配的路径表得到面包屑路径数据
      this.currMenuPath = currMenuPath;
      // this.noHomeBread = noHomeBread;
    },
  },
  methods: {
    // 获取当前点亮的菜单路由路径，
    getCurrMenuPath($route) {
      // 清空原有记录
      const currMenu = {};
      // 迭代获取到菜单映射表和当前匹配的路径表
      getMenus(this.menus, currMenu, 0, $route.path);
      // 根据当前匹配的路径表得到面包屑路径数据
      const currMenuPath = getPath(currMenu);
      // 菜单只有一项时，不显示
      if (currMenuPath.length === 1) {
        return { /* noHomeBread: true,  */currMenuPath: [] };
      }
      return { /* noHomeBread: false,  */currMenuPath };
    },
  },
};
</script>

<style></style>
