<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon
        v-on:click.stop="drawerHandler"
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
        <v-tabs centered slider-color="white" background-color="transparent">
          <v-tab v-for="(item, i) in skillTabs" :key="i">
            <router-link :to="item.link">
              {{ item.title }}
            </router-link>
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
    }
  },
  methods: {
    drawerHandler: function() {
      this.$store.commit("drawerHandler");
    }
  },
  props: ["appPath"],
  data: function() {
    return {
      path: this.appPath
    };
  },
  watch: {
    $route() {
      this.path = this.appPath;
    }
  }
};
</script>
