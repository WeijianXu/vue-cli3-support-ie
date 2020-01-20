<template>
  <BasicLayout :side-menus="sideMenus">
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
      sideMenus,
    };
  },
};
</script>

<style lang="scss">
@import "@/theme/index";

.page__bread, .page__body {
  margin: $gap-medium $gap;
}
// .page__body{
//   // 边距共 20px *4 + 2px（防抖）
//   height: calc(100% - 82px);
// }
</style>
