<template>
  <v-app :class="path">
    <Navbar :appPath="path" />
    <Drawer />
    <v-content>
      <router-view class="pa-4"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/shared/Navbar";
import Drawer from "./components/shared/Drawer";

export default {
  name: "App",

  components: {
    Navbar,
    Drawer
  },
  mounted: function() {
    this.path = this.$route.path== "/" ? "home" : this.$route.path.replace("/", "");
  },
  watch: {
    $route() {
      this.path =
        this.$route.path == "/" ? "home" : this.$route.path.replace("/", "");
    }
  },
  data: () => ({
    path: ""
  })
};
</script>

<style>
html {
  overflow: auto !important;
}

.darkblue--text {
  color: #5f7987 !important;
}
</style>
