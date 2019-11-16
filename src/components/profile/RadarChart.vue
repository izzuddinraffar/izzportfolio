<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  data: () => ({
    chartdata: {
      labels: [
        "Front-end",
        "Back-end",
        "FullStack",
        "DevOps",
        "Web Development",
        "Mobile Development",
        "Dekstop Development"
      ],
      datasets: [
        {
          label: "",
          borderColor: "#2196F3",
          data: [100, 90, 100, 80, 100, 70, 50]
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false,
      scale: {
        angleLines: {
            display: false
        },
        ticks: {
            stepSize: 10
        }
    }
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
