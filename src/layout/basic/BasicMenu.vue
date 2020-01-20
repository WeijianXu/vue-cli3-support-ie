<template>
  <Menu
    :mode="mode"
    :theme="theme"
    :active-name="activeName"
    width="auto"
    :accordion="accordion"
    :open-names="openNames"
  >
    <template v-for="menu in data">
      <!-- no children menus -->
      <MenuItem
        v-if="(!menu.children || !menu.children.length || menu.hideChildren) && menu.show"
        :key="menu.name"
        :name="menu.name"
        :to="menu.to"
      >
        <Icon v-if="menu.icon" :type="menu.icon" />
        {{ menu.text }}
      </MenuItem>
      <Submenu
        v-else-if="menu.children && menu.children.length && menu.show"
        :key="menu.name"
        :name="menu.name"
      >
        <template slot="title">
          <Icon v-if="menu.icon" :type="menu.icon" />
          {{ menu.text }}
        </template>
        <MenuItem
          v-for="child in menu.children"
          :key="child.name"
          :name="child.name"
          :to="child.to"
        >{{ child.text }}</MenuItem>
      </Submenu>
    </template>
  </Menu>
</template>

<script>
export default {
  name: 'BasicMenu',
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    defaultName: {
      type: [Number, String],
      default: '',
    },
    mode: {
      type: String,
      default: 'vertical',
    },
    theme: {
      type: String,
      default: 'light',
    },
    accordion: {
      type: Boolean,
      default: true,
    },
    openNames: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      activeName:
        this.defaultName || (this.data.length > 0 ? this.data[0].name : ''),
    };
  },
};
</script>

<style></style>
