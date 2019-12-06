<template>
  <div id="app">
    <router-view class="main"></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  mounted() {
    // console.log(1233)
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
@import "assets/style/index.scss";

#app {
  height: 100%;
}
.el-card__body {
  min-height: 370px !important;
}
.main {
  background: #fff;
}
</style>
