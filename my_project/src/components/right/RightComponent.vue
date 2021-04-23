<template>
  <div class="sideBar">
    <right-chart-1></right-chart-1>
    <right-chart-2></right-chart-2>
  </div>
</template>

<script>
import RightChart1 from "./RightChart1";
import RightChart2 from "./RightChart2";

export default {
  name: "RightComponent",
  components: {
    RightChart1,
    RightChart2,
  },
};
</script>

<style scoped>
.sideBar {
  position: relative;
  background-color: #071c37;
  width: 300px;
  height: 1007px;
  opacity: 0.9;
}
</style>