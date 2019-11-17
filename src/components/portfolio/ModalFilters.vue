<template>
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <template v-slot:activator="{ on }">
      <v-btn class="float-right" color="page-color" dark v-on="on">
        <v-icon dark>filter_list</v-icon></v-btn
      >
    </template>
    <v-card>
      <v-card-title class="darkblue--text">Select technology </v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;">
        <v-checkbox
          v-for="(item, i) in techData"
          :key="i"
          hide-details
          :label="item.title"
          :value="item.title"
        ></v-checkbox>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogm1: "",
      dialog: false
    };
  },
  computed: {
    techData() {
      return this.$store.state.skills.bar_chart;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/css/variable.scss";
.page-color {
  background-color: $blue--color;
}
</style>
