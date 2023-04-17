<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  font-size: 16px !important;
}
#app,
body,
html {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/*
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */

#app {
  // 设置默认盒模型为标准盒模型
  * {
    box-sizing: content-box;
  }
  // 保留 ivu 中的 border-box 盒模型
  [class*="ivu-"] {
    box-sizing: border-box;
  }
  // 保留 element-ui 中 盒模型设置
  [class*="el-"],
  .el-table th>.cell  {
    box-sizing: border-box;
  }
  .el-card {
    box-sizing: content-box;
  }
}
</style>
