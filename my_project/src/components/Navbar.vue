<template>
  <div class="navBarContainer">
    <img src="../assets/background.png" class="navBar" />
    <span class="title">自动化学院可视化大屏</span>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style scoped>
.navBarContainer {
  position: relative;
}

.navBar {
  width: 100%;
  height: 72px;
  opacity: 1;
  display: block;
}

.title {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -20px;
  font-size: 30px;
  color: #ffffff;
}
</style>