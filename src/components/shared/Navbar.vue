<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon
        v-on:click.stop="drawerHandler = !drawerHandler"
        class="grey--text"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span v-html="this.$store.state.app.logo" />
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-avatar>
        <v-img src="@/assets/avatar.jpg"></v-img>
      </v-avatar>

      <template v-if="path == 'skills'" v-slot:extension>
        <v-tabs v-model="selected" centered slider-color="white" background-color="transparent">
          <v-tab v-for="item in skillTabs" :key="item.id" :to="item.link">
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  computed: {
    skillTabs() {
      return this.$store.state.skills.tabs;
    },
    drawerHandler: {
      get() {
        return this.$store.getters.drawerHandler;
      },
      set(v) {
        return this.$store.commit("setDrawer", v);
      }
    }
  },
  props: ["appPath"],
  data: function() {
    return {
      path: this.appPath,
      selected : ""
    };
  },
  watch: {
    $route() {
      this.path = this.appPath;
      if (this.path == "skills") {
        this.selected = this.$route.params.id;
      }
    }
  }
};
</script>
