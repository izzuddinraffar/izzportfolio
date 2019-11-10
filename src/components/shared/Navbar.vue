<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon v-on:click="drawerHandler" class="grey--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">izz</span>Portfolio
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-avatar>
        <v-img src="@/assets/avatar.jpg"></v-img>
      </v-avatar>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  methods: {
    drawerHandler: function() {
      this.$store.commit("drawerHandler");
    }
  }
};
</script>
