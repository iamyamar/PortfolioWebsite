// typed.js
var typed = new Typed(".auto-name", {
  strings: [
    "Yash Kumar",
    "Web Developer",
    "Content Creator",
    "Freelancer",
    "Leads Expert",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
})

// radar map from chart.js

const ctx = document.getElementById("myChart").getContext("2d")
const data = {
  labels: ["Javascript", "React", "HTML5", "CSS3", "React Native"],
  datasets: [
    {
      label: "FRONTEND TECHNOLOGIES",
      data: [85, 80, 95, 95, 50],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
}
const myChart = new Chart(ctx, {
  type: "radar",
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
})

// AOS - animate on scrool

AOS.init()
// makestar()
