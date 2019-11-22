<template>
  <div class="container">
    <div class="d-flex justify-center col-md-12">
      <div class="d-flex align-top col-md-11 flex-wrap">
        <div class="d-flex col-md-5 col-sm-12">
          <div class="col-md-12 pa-0">
            <div class="d-flex align-center flex-column">
              <div class="col-md-12 pa-0">
                <RadarChart />
              </div>
              <router-link class="d-none d-sm-none d-md-flex" to="/skills">
                <v-btn
                  large
                  color="page-color"
                  class="white--text mt-5 btn-skill"
                >
                  <v-icon left dark>mouse</v-icon>LOOK AT MY SKILLS
                </v-btn>
              </router-link>
            </div>
          </div>
        </div>
        <div class="d-flex col-md-7 col-sm-12">
          <div class="col-md-12">
            <h3 class="display-1 font-weight-bold title-color  mb-3">
              ABOUT ME
            </h3>
            <p class="darkblue--text font-weight-bold mb-3">
              Experience as Software Developer
            </p>
            <p></p>
            <p>
              My name is Mohamad Izzuddin bin Ab Raffar. I was graduated with a
              bachelor's degree from USIM. I've been very passioned in software
              development since I was 20 years old. Since then, I always used
              HTML & CSS for simple projects and creating custom templates for
              Blogspot.
            </p>
            <p>
              During my studies in the year 2010 - 2014 in USIM, I was involved
              in 2 projects related to website development. The first is a
              simple CRUD application using HTML, CSS, Javascript & PHP. Then
              the second one uses CMS Joomla.
            </p>
            <p>
              I have almost 5 years of experience in the private IT company
              especially expertise in software development. During my career, I
              have been exposed to develop complex applications from A-Z, which
              is starting to code a blank page to be a useful page. My position
              like more to Front-end & Solution Developer. I was familiar with
              traditional development tools like jQuery, Bootstrap and PHP
              previously. Nowadays, I tend to develop applications with modern
              development tools like using React.JS, Vue.JS, Node.JS and more.
            </p>
            <router-link class="d-flex d-md-none" to="/skills">
              <v-btn
                large
                color="page-color"
                class="white--text mt-5 btn-skill"
              >
                <v-icon left dark>mouse</v-icon>LOOK AT MY SKILLS
              </v-btn>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/css/variable.scss";
.v-application.profile .container.pa-4 {
  padding: 0px !important;
  margin: 0px !important;
  width: 100% !important;
  max-width: 100% !important;
}
.profile #mainDrawer .deep-purple--text.text--accent-4 {
  color: $purple--color;
  caret-color: $purple--color;
}
</style>

<style lang="scss" scooped>
@import "@/css/variable.scss";
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

  .page-color {
    background-color: $purple--color;
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
