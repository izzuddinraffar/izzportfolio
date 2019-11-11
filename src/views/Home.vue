<template>
  <div class="d-flex flex-column justify-center container">
    <h1 class="text-uppercase blue--text display-3 font-weight-bold pt-2 pb-2">
      Welcome to
      <br />my portfolio
    </h1>
    <p class="darkblue--text display-1 pt-2 pb-10">
      Experienced Front-end Developer.
      <br />Skilled in HTML, CSS, JS & more.
    </p>
    <div class="d-flex align-center">
      <v-btn x-large color="error" class="white--text btn-width mr-5">
        <v-icon left dark>mouse</v-icon>GET STARTED
      </v-btn>
      <v-btn x-large outlined color="primary" class=" btn-width">
        <v-icon left dark>email</v-icon>CONTACT
      </v-btn>
    </div>
  </div>
</template>

<style>
#app.home {
  background-color: #fff;
}

.home .v-content {
  padding-top: 0px !important;
}
</style>


<style scoped>
.container {
  height: calc(100vh - 0px);
  position: relative;
  background-image: url("~@/assets/home2.png");
  background-position-x: right;
}

.container * {
  position: relative;
  z-index: 2;
}

.blue--text {
  color: #06bad5 !important;
}

.dark-blue--text {
  color: #5f7987 !important;
}

.text-uppercase {
  text-transform: uppercase;
}

.btn-width {
  width: 200px;
}
</style>