<template>
  <div class="sideBar">
    <left-chart-1></left-chart-1>
    <left-chart-2></left-chart-2>
  </div>
</template>

<script>
import LeftChart1 from "./LeftChart1";
import LeftChart2 from "./LeftChart2";
export default {
  name: "LeftComponent",
  components: {
    LeftChart1,
    LeftChart2,
  },
};
</script>

<style scoped>
.sideBar {
  background-color: #071c37;
  width: 300px;
  height: 1007px;
  opacity: 0.9;
}
</style>