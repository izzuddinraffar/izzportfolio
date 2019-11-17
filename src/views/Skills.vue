<template>
  <div class="container">
    <!-- <div class="header-banner d-flex justify-center col-md-12">
      <div class=" d-flex align-center col-md-11">
        <div>
          <h3 class="display-1 font-weight-bold darkblue--text">
            Describing My Skills <br />
            Software Development...
          </h3>
        </div>
      </div>
    </div> -->
    <div class="d-flex justify-center col-md-12">
      <div class="d-flex align-top col-md-11">
        <div class="col-md-12">
          <div class="d-flex col-md-12">
            <div class="">
              <h3 class="display-1 font-weight-bold title-color  mb-3">
                MY SKILLS
              </h3>
              <p>
                The main area of my skills tend to the front-end developer
                (client side of the web). I have also full-stack developer
                skills and devOps in the software development. Take a look my
                skills below.
              </p>
            </div>
          </div>
          <div class="col-md-12">
            <div class="d-flex align-center flex-column mr-10  chart-container">
              <!-- <v-avatar size="120">
                <img src="@/assets/avatar.jpg" alt="Izzuddin" />
              </v-avatar> -->
              <template>
                <BarChart />
              </template>
            </div>
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
@import "@/css/variable.scss";
.skills {
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

  .chart-container > div {
    width: 100%;
  }

  header {
    background-color: $orange--color;
    border-color: $orange--color;
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
    color: $orange--color;
  }
}

.darkblue--text {
  color: #5f7987 !important;
}

.page-color {
  background-color: $orange--color;
}
</style>

<script>
import BarChart from "../components/skills/BarChart";
export default {
  components: {
    BarChart
  }
};
</script>
