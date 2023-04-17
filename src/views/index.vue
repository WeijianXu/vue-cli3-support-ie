<template>
  <BasicLayout :user-info="userInfo" :side-menus="sideMenus" @userMenuClick="onUserMenuClick">
    <BasicBread :menus="sideMenus" class="page__bread"></BasicBread>
    <div class="page__body">
      <router-view></router-view>
    </div>
  </BasicLayout>
</template>

<script>
import { BasicLayout, BasicBread } from '@/layout';
import sideMenus from '@/config/sideMenus';

export default {
  components: {
    BasicLayout,
    BasicBread,
  },
  data() {
    return {
      userInfo: {
        username: 'admin',
      },
      sideMenus,
    };
  },
  methods: {
    onUserMenuClick(menuName) {
      if (menuName === 'logout') {
        console.log('====================================');
        console.log('user logout!');
        console.log('====================================');
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/theme/index";

.page__bread, .page__body {
  margin: $gap-medium $gap;
}
.page__body{
  // 边距共 16px *4 + 2px（防抖）
  height: calc(100% - 66px);
}
</style>
