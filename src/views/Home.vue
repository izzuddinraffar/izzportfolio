<template>
  <div class="container d-flex flex-column justify-center">
    <div class="d-flex  content flex-column justify-center col-md-6 col-sm-12">
      <h1
        ref="hello"
        class="text-uppercase white--text display-2 font-weight-bold pt-2 pb-2 text-sm-center text-md-end m-welcome"
      >
        <span> Hello</span>, my name is
        <br />
        Mohamad Izzuddin
      </h1>
      <p
        ref="title"
        class="white--text display-1 pt-2 mb-0  text-md-end text-sm-center m-title"
      >
        Experienced Software Developer
      </p>
      <p
        ref="subtitle"
        class="white--text subtitle pt-2 pb-10  text-md-end text-sm-center m-subtitle"
      >
        Front-end Developer / Javascript Specialist / CMS Expert
      </p>
      <div
        ref="btn"
        class=" d-md-flex  align-md-center justify-md-end btn-position"
      >
        <router-link to="/profile">
          <v-btn
            x-large
            color="error"
            class="white--text btn-width mr-sm-5 mr-md-5 mb-3"
          >
            <v-icon left dark>mouse</v-icon>GET STARTED
          </v-btn>
        </router-link>
        <router-link to="/contact">
          <v-btn x-large outlined color="white" class=" btn-width mb-3">
            <v-icon left dark>email</v-icon>CONTACT
          </v-btn>
        </router-link>
      </div>
    </div>
    <div ref="bg" class="bg"></div>
  </div>
</template>

<script>
//import { TweenLite, TimelineLite } from "gsap";
import { gsap, TweenLite, TimelineLite } from "gsap";
gsap.registerPlugin(TweenLite,TimelineLite); 

export default {
  mounted() {
    const { hello, title, subtitle, btn, bg } = this.$refs;
    TweenLite.set(hello, { x: -200, rotation: 90, opacity: 0 });
    TweenLite.set(bg, { x: -200, rotation: 0, opacity: 0 });
    TweenLite.set(title, { x: 200, rotation: 0, opacity: 0 });
    TweenLite.set(subtitle, { x: -200, rotation: 0, opacity: 0 });
    TweenLite.set(btn, { opacity: 0 });
    const timeline = new TimelineLite();
    timeline.to(hello, 0.3, { x: 0, rotation: 0, opacity: 1 });
    timeline.to(bg, 0.3, { x: 0, rotation: 0, opacity: 1 });
    timeline.to(title, 0.5, { x: 0, rotation: 0, opacity: 1 });
    timeline.to(subtitle, 0.3, { x: 0, rotation: 0, opacity: 1 });
    timeline.to(btn, 1, { opacity: 1 });
  }
};
</script>

<style lang="scss">
.home .v-content__wrap {
  background-image: linear-gradient(
    to right bottom,
    #1b1b1b,
    #4c4c4c,
    #838383,
    #bfbfbf,
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
  overflow: hidden;
}

.home .container .bg {
  background-image: url("~@/assets/home9.png");
  background-position-x: right;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
}

.home .container .content {
  position: relative;
  z-index: 2;
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

.home #mainDrawer  .deep-purple--text.text--accent-4 {
  color: #404040 !important;
  caret-color:  #404040 !important;
}
</style>

<style lang="scss" scoped>
@media only screen and (max-width: 960px) {
  .container,
  .bg {
    background-image: none !important;
    background-color: #292929 !important;
  }
  .btn-position {
    display: flex !important;
    justify-content: center !important;
  }
}
@media only screen and (max-width: 600px) {
  h1.m-welcome {
    font-size: 2rem !important;
    text-align: center;
  }
  p.m-title {
    font-size: 1.5rem !important;
    text-align: center;
  }
  p.m-subtitle {
    font-size: 1rem !important;
    text-align: center;
  }
  .btn-position {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }
}
</style>
