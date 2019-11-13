<template>
  <div class="container">
    <div class="header-banner d-flex justify-center col-md-12">
      <div class=" d-flex align-center col-md-9">
        <div>
          <h4 class="subtitle-1 grey--text">My Projects</h4>
          <h3 class="display-1 font-weight-bold darkblue--text">
            Check Our Recent <br />
            Client Work...
          </h3>
        </div>
      </div>
    </div>
    <div class="d-flex justify-center col-md-12">
      <div class="d-flex align-top col-md-9 flex-wrap">
        <template v-for="(item, i) in projectItems">
          <div :key="i">
            <div class="pa-1">
              <v-card max-width="374">
                <v-img height="250" src="@/assets/drawer/material.webp"></v-img>

                <v-card-title>{{ item.title }}</v-card-title>

                <v-card-text>
                  <div class="my-4 subtitle-1 black--text">
                    Description
                  </div>

                  <div>
                    In understanding how this concept works, a comprehension the
                    technologies behind cryptocurrencies is essential.
                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title>BuiltWith Technologies </v-card-title>

                <v-card-text>
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
export default {
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
.v-application.projects .container.pa-4 {
  padding: 0px !important;
  margin: 0px !important;
  width: 100% !important;
  max-width: 100% !important;
}
</style>

<style lang="scss" scooped>
.projects {
  .container {
    padding: 0px !important;
    .header-banner {
      height: 137px;
      width: 100%;
      // background-color: #007791;
      //color: #fff;
    }
  }

  .darkblue--text {
    color: #5f7987 !important;
  }
}
</style>
