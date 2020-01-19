<template>
  <Layout>
    <Header>
      <Menu mode="horizontal" theme="primary" active-name="home">
        <MenuItem name="home" to="/">
         <Icon type="ios-home-outline" />
          首页
        </MenuItem>
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

<style></style>
