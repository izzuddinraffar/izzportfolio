 <template>
  <v-navigation-drawer app :value="drawerOpened">
    <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-row align="end" class="lightbox white--text pa-2 fill-height">
        <v-col>
          <div class="subheading">{{this.$store.state.user.name}}</div>
          <div class="body-1">{{this.$store.state.user.email}}</div>
        </v-col>
      </v-row>
    </v-img>

    <v-list>
      <template v-for="(item, i) in drawerItems" >
        <v-divider v-if="item.divider" :key="i"></v-divider>
        <v-list-item v-else :key="i">
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    //user: this.$store.state.user
  }),
  computed: {
    drawerOpened() {
      return this.$store.state.drawer.status;
    },
    drawerItems() {
      return this.$store.state.drawer.items;
    }
  }
};
</script>

<style scoped>
.lightbox {
  box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}
</style>

 
 