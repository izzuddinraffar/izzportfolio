<template>
  <div class="container">
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
                <bar-chart
                  :chart-data="datacollection"
                  :options="options"
                ></bar-chart>
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

<style lang="scss">
.skills .v-tab a {
  color: inherit;
  text-decoration: none;
}
</style>

<script>
import BarChart from "../components/skills/BarChart-dynamic";
export default {
  components: {
    BarChart
  },
  data() {
    return {
      datacollection: null,
      label: [],
      datasets: [],
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                callback: function(value) {
                  return value + "%";
                }
              },
              scaleLabel: {
                display: true,
                labelString: ""
              }
            }
          ]
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
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
      const id = this.$route.params.id;
      const skills = this.$store.state.skills.bar_chart;
      this.labels = [];
      this.datasets.data = [];
      this.datasets.backgroundColor = [];
      this.datasets.borderColor = [];
      if (id) {
        for (const x in skills) {
          const item = skills[x];
          if (!item.class.includes(id)) {
            continue;
          }
          this.labels.push(item.title);
          this.datasets.data.push(item.skills);
          const first = this.generateRandomInt();
          const second = this.generateRandomInt();
          const third = this.generateRandomInt();
          this.datasets.backgroundColor.push(
            `rgba(${first}, ${second}, ${third}, 0.2)`
          );
          this.datasets.borderColor.push(
            `rgba(${first}, ${second}, ${third}, 1)`
          );
        }
        this.fillData();
        return;
      }
      skills.map(item => {
        this.labels.push(item.title);
        this.datasets.data.push(item.skills);
        const first = this.generateRandomInt();
        const second = this.generateRandomInt();
        const third = this.generateRandomInt();
        this.datasets.backgroundColor.push(
          `rgba(${first}, ${second}, ${third}, 0.2)`
        );
        this.datasets.borderColor.push(
          `rgba(${first}, ${second}, ${third}, 1)`
        );
      });
      this.fillData();
    },
    fillData() {
      this.datacollection = {
        labels: this.labels,
        datasets: [
          {
            data: this.datasets.data,
            backgroundColor: this.datasets.backgroundColor,
            borderColor: this.datasets.borderColor,
            borderWidth: 1
          }
        ]
      };
    }
  }
};
</script>
