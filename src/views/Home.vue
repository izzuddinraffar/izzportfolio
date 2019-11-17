<template>
  <div class="container d-flex flex-column justify-center">
    <div class="d-flex flex-column justify-center col-md-6">
      <h1
        class="text-uppercase white--text display-2 font-weight-bold pt-2 pb-2 text-end"
      >
        Hello, my name is
        <br />
        Mohamad Izzuddin
      </h1>
      <p class="white--text display-1 pt-2 mb-0 text-end">
        Experienced Software Developer
      </p>
      <p class="white--text subtitle pt-2 pb-10 text-end">
        Front-end Developer / Javascript Specialist / CMS Expert
      </p>
      <div class="d-flex align-center justify-end">
        <v-btn x-large color="error" class="white--text btn-width mr-5">
          <v-icon left dark>mouse</v-icon>GET STARTED
        </v-btn>
        <v-btn x-large outlined color="white" class=" btn-width">
          <v-icon left dark>email</v-icon>CONTACT
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home .v-content__wrap {
  background-image: linear-gradient(
    to right bottom,
    #606060,
    #858585,
    #acacac,
    #d5d5d5,
    #ffffff
  );
}

#app.home {
  background-color: #fff;
}

.home .v-content {
  padding-top: 0px !important;
  /* transition: none !important; */
}

.home .v-content {
  transition: none !important;
}

.home header {
  background-color: #fff0 !important;
}

.home .container {
  height: calc(100vh - 0px);
  position: relative;
  background-image: url("~@/assets/home9.png");
  background-position-x: right;
}

.home .container * {
  position: relative;
  z-index: 2;
}

.home .blue--text {
  color: #06bad5 !important;
}

.home .text-uppercase {
  text-transform: uppercase;
}

.home .btn-width {
  width: 200px;
}
</style>
