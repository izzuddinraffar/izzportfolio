<template>
  <div class="container">
    <!-- <div class="header-banner d-flex justify-center col-md-12">
      <div class=" d-flex align-center col-md-11">
        <div>
          <h3 class="display-1 font-weight-bold title-color">
            See My Profile <br />
            Looks like...
          </h3>
        </div>
      </div>
    </div> -->
    <div class="d-flex justify-center col-md-12">
      <div class="d-flex align-top col-md-11">
        <div class="d-flex col-md-5">
          <div class="col-md-12">
            <div class="d-flex align-center flex-column mr-10">
              <!-- <v-avatar size="120">
                <img src="@/assets/avatar.jpg" alt="Izzuddin" />
              </v-avatar> -->
              <template>
                <RadarChart />
              </template>
              <v-btn large color="page-color" class="white--text mt-5 btn-skill">
                <v-icon left dark>mouse</v-icon>LOOK AT MY SKILLS
              </v-btn>
            </div>
          </div>
        </div>
        <div class="d-flex col-md-7">
          <div class="col-md-12">
            <h3 class="display-1 font-weight-bold title-color  mb-3">
              ABOUT ME
            </h3>
            <p class="darkblue--text font-weight-bold mb-3">
              Experience as Software Developer
            </p>
            <p>
              Starting out at the age of 13 I never stopped learning new
              programming skills and languages. Early I started creating
              websites for friends and just for fun as well. Besides web
              development I also explored Python and other non-web-only
              languages. This passion has since lasted and lead to my decision
              of working as a freelance web developer and consultant. The
              success and fun I have in this job is immense and really keeps
              that passion burningly alive.
            </p>
            <p>
              Starting web development on the backend (PHP with Laravel, NodeJS,
              Python) I also became more and more of a frontend developer using
              modern frameworks like React, Angular or VueJS 2 in a lot of
              projects. I love both worlds nowadays!
            </p>
            <p>
              As a self-taught developer I had the chance to broaden my horizon
              by studying Business Administration where I hold a Master's
              degree. That enabled me to work in a major strategy consultancy as
              well as a bank. While learning, that I enjoy development more than
              these fields, the time in this sector greatly improved my overall
              experience and skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.v-application.profile .container.pa-4 {
  padding: 0px !important;
  margin: 0px !important;
  width: 100% !important;
  max-width: 100% !important;
}
</style>

<style lang="scss" scooped>
@import '@/css/variable.scss';
.profile {
  .container {
    padding: 0px !important;
    .header-banner {
      // height: 137px;
      width: 100%;
      // background-color: #007791;
      // color: #fff;
    }
    .btn-skill {
      min-width: 200px !important;
    }
  }
  header {
    background-color: $purple--color;
    border-color: $purple--color;
    color: #fff !important;

    .v-tab {
      color: rgba(255, 255, 255, 0.84) !important;
    }
    button,
    i,
    .v-toolbar__title,
    .v-tab--active {
      color: #fff !important;
    }
  }
  .title-color {
    color: $purple--color;
  }

  .page-color{
    background-color:$purple--color;
  }
}
</style>

<script>
import RadarChart from "../components/profile/RadarChart";
export default {
  components: {
    RadarChart
  }
};
</script>
