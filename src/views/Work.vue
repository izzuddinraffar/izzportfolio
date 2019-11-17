<template>
  <div class="container">
    <div class="d-flex justify-center col-md-12">
      <div class="d-flex align-top col-md-11 flex-wrap">
        <div class="d-flex col-md-12">
          <div>
            <h3 class="display-1 font-weight-bold title-color  mb-3">
              MY PORTFOLIO <ModalFilters />
            </h3>
            <p>
              From Web Components and UI/UX animations to React.JS, Redux,
              Vue.JS, Node.JS and others. Check out my latest software
              development portfolio projects.
            </p>
          </div>
        </div>

        <template v-for="(item, i) in projectItems">
          <div :key="i">
            <div class="pa-1">
              <v-card max-width="310">
                <div class="lightbox">
                  <v-img height="200" src="@/assets/drawer/material.webp">
                    <v-row
                      align="end"
                      class="lightbox white--text pa-2 fill-height"
                    >
                      <v-card-title class="project-title">{{
                        item.title
                      }}</v-card-title>
                    </v-row>
                  </v-img>
                </div>

                <v-card-text>
                  <!-- <div class="my-4 subtitle-1 black--text">
                    Description
                  </div> -->

                  <div>
                    In understanding how this concept works, a comprehension the
                    technologies behind cryptocurrencies is essential.
                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>
                <v-card-text>
                  <!-- <div class="my-4 subtitle-1 black--text">
                    Technologies
                  </div> -->
                  <v-chip-group
                    active-class="deep-purple accent-4 white--text"
                    column
                  >
                    <v-chip>React.js</v-chip>

                    <v-chip>Redux.js</v-chip>

                    <v-chip>Node.js</v-chip>

                    <v-chip>PostgreSQL</v-chip>
                  </v-chip-group>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ModalFilters from "../components/portfolio/ModalFilters";
export default {
  components: {
    ModalFilters
  },
  data: () => ({
    //user: this.$store.state.user
  }),
  computed: {
    projectItems() {
      return this.$store.state.projects;
    }
  }
};
</script>

<style>
.v-application.portfolio .container.pa-4 {
  padding: 0px !important;
  margin: 0px !important;
  width: 100% !important;
  max-width: 100% !important;
}
</style>

<style lang="scss" scooped>
@import "@/css/variable.scss";
.portfolio {
  .container {
    padding: 0px !important;
    .header-banner {
      // height: 137px;
      width: 100%;
      // background-color: #007791;
      //color: #fff;
    }
  }

  .title-color {
    color: $blue--color;
  }

  .lightbox {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.4) 0%,
      transparent 72px
    );
  }

  .page-color {
    background-color: $blue--color;
  }
  header {
    background-color: $blue--color;
    border-color: $blue--color;
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
}
</style>
