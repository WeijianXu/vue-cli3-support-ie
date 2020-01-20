<template>
  <Layout>
    <Header>
      <Menu mode="horizontal" theme="primary" active-name="home">
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
      </Menu>
    </Header>
    <Layout>
      <Sider hide-trigger>Sider</Sider>
      <Content>
        <router-view />
      </Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/theme/variants";

.ivu-layout {
  height: 100%;
}
.ivu-layout-content {
  padding: $gap-medium $gap;
}
</style>
