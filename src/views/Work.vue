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

        <template v-for="(item, i) in projects">
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

                  <v-chip
                    :ripple="false"
                    v-bind:style="item.style[ti]"
                    v-for="(tech, ti) in item.tech"
                    :key="ti"
                    >{{ tech }}</v-chip
                  >
                </v-card-text>
              </v-card>
            </div>
          </div>
        </template>
        <v-alert v-if="projects.length==0" icon="info" prominent text type="info">
          Sorry, no results found! try a different search selection.
        </v-alert>
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
    projects: []
  }),
  mounted() {
    this.generateData();
  },
  watch: {
    $route() {
      this.generateData();
    }
  },
  methods: {
    generateRandomInt() {
      return Math.floor(Math.random() * Math.floor(255));
    },
    generateData() {
      const params = this.$route.params.filters;
      const projects = JSON.parse(JSON.stringify(this.$store.state.projects));
      const filteredProjects = [];
      for (const x in projects) {
        const item = projects[x];
        item.style = [];
        if (params && JSON.parse(params).length != 0) {
          let state = true;
          if (JSON.parse(params).some(e => item.tech.includes(e))) {
            state = false;
          }
          if (state) {
            continue;
          }
        }
        for (const y in item.tech) {
          const tech = item.tech[y];
          const first = this.generateRandomInt();
          const second = this.generateRandomInt();
          const third = this.generateRandomInt();
          item.style.push({
            backgroundColor: `rgba(${first}, ${second}, ${third}, 0.2)`,
            border: `1px solid rgba(${first}, ${second}, ${third}, 1)`,
            margin: "2px",
            fontSize: "12px"
          });
          tech;
        }
        filteredProjects.push(item);
      }
      this.projects = filteredProjects;
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
