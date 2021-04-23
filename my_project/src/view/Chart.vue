<template>
  <div>
    <navbar></navbar>
    <div class="sideBarContainer">
      <left-component></left-component>
      <right-component></right-component>
    </div>
  </div>
</template>

<script>
import LeftComponent from "../components/left/LeftComponent";
import Navbar from "../components/Navbar.vue";
import RightComponent from "../components/right/RightComponent.vue";

export default {
  name: "Chart",
  components: {
    LeftComponent,
    RightComponent,
    Navbar,
  },
};
</script>

<style scoped>
.sideBarContainer {
  display: flex;
  justify-content: space-between;
}
</style>