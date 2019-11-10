<template>
  <v-app>
    <Navbar/>
     <Drawer/>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/shared/Navbar';
import Drawer from './components/shared/Drawer';

export default {
  name: 'App',

  components: {
    Navbar,
    Drawer
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  html{
    overflow: auto !important;
  }
</style>
