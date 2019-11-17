<template>
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <template v-slot:activator="{ on }">
      <v-btn class="float-right" color="page-color" dark v-on="on"> <v-icon dark>filter_list</v-icon></v-btn>
    </template>
    <v-card>
      <v-card-title class="darkblue--text">Select </v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;">
  
         <v-checkbox hide-details label="Bahamas, The" value="bahamas"></v-checkbox>
         <v-checkbox hide-details label="Bahrain" value="bahrain"></v-checkbox>
         <v-checkbox hide-details label="Bangladesh" value="bangladesh"></v-checkbox>
         <v-checkbox hide-details label="Barbados" value="barbados"></v-checkbox>
         <v-checkbox hide-details label="Belarus" value="belarus"></v-checkbox>
         <v-checkbox hide-details label="Belgium" value="belgium"></v-checkbox>
         <v-checkbox hide-details label="Belize" value="belize"></v-checkbox>
         <v-checkbox hide-details label="Benin" value="benin"></v-checkbox>
         <v-checkbox hide-details label="Bhutan" value="bhutan"></v-checkbox>
         <v-checkbox hide-details label="Bolivia" value="bolivia"></v-checkbox>
         <v-checkbox hide-details label="Bosnia and Herzegovina" value="bosnia"></v-checkbox>
         <v-checkbox hide-details label="Botswana" value="botswana"></v-checkbox>
         <v-checkbox hide-details label="Brazil" value="brazil"></v-checkbox>
         <v-checkbox hide-details label="Brunei" value="brunei"></v-checkbox>
         <v-checkbox hide-details label="Bulgaria" value="bulgaria"></v-checkbox>
         <v-checkbox hide-details label="Burkina Faso" value="burkina"></v-checkbox>
         <v-checkbox hide-details label="Burma" value="burma"></v-checkbox>
         <v-checkbox hide-details label="Burundi" value="burundi"></v-checkbox>
      
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
  }
};
</script>

<style lang="scss" scoped>
@import "@/css/variable.scss";
   .page-color {
    background-color: $blue--color;
  }
</style>
