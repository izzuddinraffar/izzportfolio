<script>
import { HorizontalBar } from "vue-chartjs";

export default {
  extends: HorizontalBar,
  data: () => ({
    chartdata: {
      labels: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Redux.js",
        "Node.js",
        "PostgreSQL"
      ],
      datasets: [
        {
         
          data: [10, 20, 30, 40, 50, 60, 70],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
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
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
