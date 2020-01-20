<template>
  <Header :class="`${pre}`">
    <div :class="`${pre}__left`">
      <div :class="`${pre}__logoWrap`">
        <img :src="logo" alt="logo" :class="`${pre}__logo`" />
        <span>{{ title }}</span>
      </div>
      <!-- view-design 中 Menu 不支持vue-router模式下的绝对路径跳转  -->
      <!-- <HeaderMenu :data="headerMenus" :default-name="defaultName"></HeaderMenu> -->
      <BasicMenu
        mode="horizontal"
        theme="primary"
        :data="headerMenus"
        :default-name="defaultName"
      ></BasicMenu>
    </div>
    <div :class="`${pre}__right`">
      <slot name="beforeUser"></slot>
      <Dropdown @on-click="onUserMenusClick">
        <Avatar v-if="avatar" :src="avatar">{{ username.slice(0, 1) }}</Avatar>
        <Avatar v-else-if="username">{{ username.slice(0, 1).toUpperCase() }}</Avatar>
        <Avatar v-else icon="ios-person"></Avatar>

        <div :class="`${pre}__username`">{{ username }}</div>
        <DropdownMenu slot="list">
          <DropdownItem v-for="menu in userMenus" :key="menu.name" :name="menu.name">
            <Icon :type="menu.icon" />
            {{ menu.text }}
          </DropdownItem>
          <DropdownItem :divided="!!(userMenus && userMenus.length)" name="logout">
            <Icon type="ios-log-out" />退出
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </Header>
</template>

<script>
import BasicMenu from './BasicMenu';
// import HeaderMenu from './HeaderMenu';
import { uiPre } from '../../config/env';
import logo from '../../assets/logo.png';

export default {
  name: 'BasicHeader',
  components: {
    BasicMenu,
    // HeaderMenu,
  },
  props: {
    headerMenus: {
      type: Array,
      default() {
        return [];
      },
    },
    title: String,
    defaultName: String,
    username: {
      type: String,
      default() {
        return '';
      },
    },
    avatar: String,
    // 账号额外的菜单列表，默认已经有“登出”菜单
    userMenus: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    // const { base } = this.$router.options;
    // console.log('Current router base: ', base);
    return {
      pre: `${uiPre}basicHeader`,
      logo,
      // defaultName: base.replace(/\//g, ''),
    };
  },
  methods: {
    onUserMenusClick(menuName) {
      // 对外提供“userMenuClick”事件，用以确定用户点击了哪个账号下拉菜单
      this.$emit('userMenuClick', menuName);
    },
  },
};
</script>

<style lang="scss">
@import "@/theme/variants";
@import "@/theme/mixins";

$name: "basicHeader";

.ivu-layout-header.#{$pre}#{$name} {
  @include flex(space-between, center);
  position: fixed;
  z-index: 1;
  width: 100%;
  // height: $layout-header-height;
  padding-left: 10px;
  padding-right: $gap;
  margin-bottom: $shadow-y;
  color: $white;
  box-shadow: 0px 1px $shadow-y rgba(21, 101, 167, 0.5);

  .#{$pre}#{$name}__left {
    @include flex(flex-start, center);
  }
  .#{$pre}#{$name}__logoWrap {
    width: $side-width;
    @include flex(flex-start);
    font-size: $font-size-large;
    font-weight: bold;
    line-height: 1.5;
  }
  .#{$pre}#{$name}__logo {
    margin-right: 8px;
    width: 1.5rem;
    height: 1.5rem;
  }
  .#{$pre}#{$name}__right {
    @include flex(flex-end, center);
  }

  .#{$pre}#{$name}__username {
    margin-left: 8px;
    font-size: $font-size-small;
    font-weight: 400;
    cursor: pointer;
  }

  // 用户下拉菜单
  .ivu-dropdown-rel {
    @include flex(flex-end, center);
  }
  .ivu-dropdown-item {
    font-size: $font-size-small !important;
    i {
      margin-right: 6px;
    }
  }

}
</style>
