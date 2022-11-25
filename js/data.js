const settings = {
  async: true,
  crossDomain: true,
  url: "js/data.json",
  method: "GET",
};
//https://ourworldindata.org/explorers/monkeypox

$.ajax(settings).done(function (response) {
  // console.log(response);
  var a;
  for (a = 0; a < response.length; a++) {
    var world = response[a].location == "World";
    if (world) {
      var data_ = response[a].date;

      const labels = { data_ };
      console.log(labels);
      //   $(".dedi").append(`
      //     <li>
      //       <div>${response[a].date}</div>
      //       <div>${response[a].total_cases}</div>
      //     </li>`);
    }
  }
});
const labels = ["2017", "2018", "2019", "2020", "2021", "2022"];
// console.log(labels);

const data = {
  labels: labels,
  datasets: [
    {
      label: "Upah Minimum Provinsi",
      backgroundColor: "#28B7FC",

      borderColor: "royalblue",
      color: "black",
      data: [3355750, 3648035, 3940973, 4276349, 4416186, 4641854],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "UMP Era Anies Baswedan",
        color: "black",
        font: {
          family: "'Montserrat'", // Your font family
          size: 20,
          weight: "bold",
        },

        padding: {
          top: 10,
          bottom: 30,
        },
      },
      legend: {
        position: "bottom",
        labels: {
          font: {
            family: "'Montserrat'",
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          color: "black",
          text: "Tahun",
          font: {
            family: "'Montserrat'", // Your font family
            size: 14,
            weight: "bold",
          },
        },
        ticks: {
          color: "black",
          font: {
            family: "'Montserrat'", // Your font family
            size: 14,
          },
        },
      },
      y: {
        title: {
          display: true,
          color: "black",
          text: "Gaji",
          font: {
            family: "'Montserrat'", // Your font family
            size: 14,
            weight: "bold",
          },
          padding: 20,
        },
        ticks: {
          color: "black",
          font: {
            family: "'Montserrat'", // Your font family
            size: 14,
          },
        },
      },
    },
    animations: {
      backgroundColor: {
        duration: 2500,
        easing: "linear",
        to: "blue",
        from: "#28B7FC",
        type: "color",
        loop: true,
      },
    },
  },
};
const myChart = new Chart(document.getElementById("myChart"), config);
