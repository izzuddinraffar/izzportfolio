<template>
  <div id="mainDrawer">
    <v-navigation-drawer
      disable-resize-watcher
      class="drawer"
      app
      v-model="drawerHandler"
    >
      <v-img :aspect-ratio="16 / 9" src="@/assets/drawer/drawer.png">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div class="subheading">{{ this.$store.state.user.name }}</div>
            <div class="body-1">{{ this.$store.state.user.email }}</div>
          </v-col>
        </v-row>
      </v-img>

      <v-list>
        <v-list-item-group color="primary">
          <template v-for="(item, i) in drawerItems">
            <v-divider v-if="item.divider" :key="i"></v-divider>
            <router-link v-else :key="i" :to="item.link">
              <v-list-item>
                <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </router-link>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    drawerHandler: {
      get() {
        return this.$store.getters.drawerHandler;
      },
      set(v) {
        return this.$store.commit("setDrawer", v);
      }
    },
    drawerItems() {
      return this.$store.state.drawer.items;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/css/variable.scss";
.drawer {
  .lightbox {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.4) 0%,
      transparent 72px
    );
  }
  .v-image {
    min-height: 200px !important;
    background-color: #9f9f9f !important;
  }
}

.profile .v-image {
  background-color: $purple--color;
}

.skills .v-image {
  background-color: $orange--color;
}

.portfolio .v-image {
  background-color: $blue--color;
}

.contact .v-image {
  background-color: $bluelight--color;
}

.v-application a {
  text-decoration: none;
}
</style>
