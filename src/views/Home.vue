<template>
  <body>
    <Preload />
    <Navbar />

    <!-- Hero -->
    <section class="hero-section s-bg-light" id="home">
      <div class="container">
        <div class="row flex-column">
          <div class="col-xl-10 mx-auto">
            <div class="hero-content text-center">
              <h1>
                COVID-19 Global Live Data <br />
                <span class="text-primary">Stay Home, Stay Safe.</span>
              </h1>
              <div class="buttons">
                <a href="#maps" class="btn btn-lg btn-primary" data-scroll
                  >COVID-19 Maps</a
                >
                <a href="#live-data" class="btn btn-lg btn-pink" data-scroll
                  >COVID-19 Live Data</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-10 mx-auto">
            <div class="hero-img">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_wdXBRc.json"
                background="transparent.html"
                speed="1"
                loop
                autoplay
              >
              </lottie-player>
            </div>
          </div>
        </div>
        <div class="hero-graphics">
          <div
            class="graphic graphic-1"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_0r0csU.json"
              background="transparent.html"
              speed=".7"
              style="width: 90px; height: 90px"
              loop
              autoplay
            >
            </lottie-player>
          </div>
          <div
            class="graphic graphic-2"
            data-aos="fade-up"
            data-aos-delay="1050"
          >
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_wpGbRj.json"
              background="transparent.html"
              speed=".7"
              style="width: 120px; height: 120px"
              loop
              autoplay
            >
            </lottie-player>
          </div>
          <div
            class="graphic graphic-3"
            data-aos="fade-up"
            data-aos-delay="1100"
          >
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_wpGbRj.json"
              background="transparent.html"
              speed=".7"
              style="width: 120px; height: 120px"
              loop
              autoplay
            >
            </lottie-player>
          </div>
          <div
            class="graphic graphic-4"
            data-aos="fade-up"
            data-aos-delay="1150"
          >
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_0r0csU.json"
              background="transparent.html"
              speed=".7"
              style="width: 90px; height: 90px"
              loop
              autoplay
            >
            </lottie-player>
          </div>
        </div>
      </div>
    </section>

    <!-- Corona news -->
    <section class="corona-updates-section">
      <div class="container">
        <div class="corona-updates-inner">
          <div class="section-header text-center mb-4 mb-md-5">
            <h4 class="heading">COVID-19 GLOBAL PANDEMIC</h4>
          </div>
          <div class="row">
            <div
              class="col-md-6 col-lg-3 statistics-card card-info"
              data-aos="fade-up"
            >
              <div class="statistics-card-inner">
                <h3 class="data-header" id="totalCases">
                  {{ Number(global.confirmed).toLocaleString() }}
                </h3>
                <p>Total confirmed</p>
                <img
                  src="assets/img/shapes/1.png"
                  alt=""
                  class="img-fluid shape"
                />
              </div>
            </div>
            <div
              class="col-md-6 col-lg-3 statistics-card card-danger"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div class="statistics-card-inner">
                <h3 class="data-header" id="totalDeaths">
                  {{ Number(global.deaths).toLocaleString() }}
                </h3>
                <p>Total deaths</p>
                <img
                  src="assets/img/shapes/1.png"
                  alt=""
                  class="img-fluid shape"
                />
              </div>
            </div>
            <div
              class="col-md-6 col-lg-3 statistics-card card-success"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="statistics-card-inner">
                <h3 class="data-header" id="totalRecovered">
                  {{ Number(global.recovered).toLocaleString() }}
                </h3>
                <p>Total recovered</p>
                <img
                  src="assets/img/shapes/1.png"
                  alt=""
                  class="img-fluid shape"
                />
              </div>
            </div>
            <div
              class="col-md-6 col-lg-3 statistics-card card-warning"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div class="statistics-card-inner">
                <h3 class="data-header" id="newCases">
                  {{ Number(global.activeCase).toLocaleString() }}
                </h3>
                <p>New cases</p>
                <img
                  src="assets/img/shapes/1.png"
                  alt=""
                  class="img-fluid shape"
                />
              </div>
            </div>
          </div>

          <div class="text-center mx-auto mt-4 mt-md-5">
            <p>Last Update : {{ global.lastUpdate }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="covid-transmission-section py-lg" id="live-data">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 mx-auto">
            <div class="section-header text-center">
              <h2 class="heading">COVID-19 Global Live Data</h2>
              <p>
                there are many variants of the corona virus, and it has spread
                to various parts of the world, therefore, stay healthy and safe
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 col-lg-12">
            <div class="transmission-card">
              <table
                id="covidTracer"
                class="table table-striped table-bordered"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Country</th>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                    <th>Last Update</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(list, i) in covid" :key="list.$index">
                    <td>{{ i + 1 }}</td>
                    <td>{{ list.combinedKey }}</td>
                    <td>{{ Number(list.confirmed).toLocaleString() }}</td>
                    <td>{{ Number(list.deaths).toLocaleString() }}</td>
                    <td>{{ Number(list.recovered).toLocaleString() }}</td>
                    <td>{{ list.lastUpdate }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="covid-transmission-section py-lg" id="maps">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 mx-auto">
            <div class="section-header text-center">
              <h2 class="heading">COVID-19 Global Maps</h2>
              <p>geolocation of how COVID-19 spread around the world</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 col-lg-12">
            <div id="mapContainer" class="mt-5"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="covid-transmission-section py-lg" id="chart">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 mx-auto">
            <div class="section-header text-center">
              <h2 class="heading">COVID-19 Chart in Indonesia</h2>
              <p>chart of how COVID-19 Active cases in Indonesia increased</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 col-lg-12">
            <canvas id="chart-canvas" style="display: block"></canvas>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </body>
</template>

<script>
import Preload from "@/components/Preload";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import network from "@/network/main";
import moment from "moment";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Chart from "chart.js";

export default {
  components: {
    Preload,
    Navbar,
    Footer,
  },
  data() {
    return {
      global: {
        confirmed: null,
        deaths: null,
        recovered: null,
        activeCase: null,
        lastUpdate: null,
      },
      covid: [],
      chart: {
        labels: [],
        dataSet: [],
        chartData: {},
      },
    };
  },
  methods: {
    getAllCasesGlobal() {
      const mymap = L.map("mapContainer").setView([46.284712, 17.067668], 2);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution: "CopyRights Covira Crafted By Vue Js",
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "YOUR_ACCESS_TOKEN",
        }
      ).addTo(mymap);

      const current = new Date();
      const date = `${current.getMonth() + 1}-${
        current.getDate() - 2
      }-${current.getFullYear()}`;
      network
        .getAllCasesGlobal(date)
        .then((res) => {
          this.covid = res.data;
          for (let i = 0; i < res.data.length; i++) {
            this.global.activeCase += parseInt(res.data[i].confirmed);
            const circle = L.circleMarker(
              L.latLng(res.data[i].lat, res.data[i].long),
              {
                radius: 10,
                color: "red",
                fillColor: "#f03",
                fillOpacity: 0.5,
              }
            ).addTo(mymap);
            circle.on("click", (e) => {
              L.popup()
                .setLatLng(e.latlng)
                .setContent(
                  `
                 Country: ${res.data[i].combinedKey}<br>
                 Confirmed : ${Number(
                   res.data[i].confirmed
                 ).toLocaleString()}<br>
                 Deaths : ${Number(res.data[i].deaths).toLocaleString()}<br>
                 Recovered : ${Number(res.data[i].recovered).toLocaleString()}`
                )
                .openOn(mymap);
            });
          }
        })
        .catch((err) => {
          throw err;
        });
    },
    getDataGlobal() {
      network
        .getAll()
        .then((res) => {
          this.global.confirmed = res.data.confirmed.value;
          this.global.deaths = res.data.deaths.value;
          this.global.recovered = res.data.recovered.value;
          this.global.lastUpdate = moment(res.data.lastUpdate).format(
            "ddd MMM DD, YYYY [at] HH:mm a"
          );
        })
        .catch((err) => {
          throw err;
        });
    },
    addDays(TheDate, days) {
      return new Date(TheDate.getTime() + days * 24 * 60 * 60 * 1000);
    },
    makeChart() {
      const arrDate = [];
      const arrData = [];
      let date = -10;
      for (let i = 0; i < 10; i++) {
        let theDate = moment(this.addDays(new Date(), date));
        let newDate = theDate.format("M-DD-YYYY");
        arrDate.push(theDate.format("ddd MMM DD, YYYY"));

        network
          .getAllCasesGlobal(newDate)
          .then((res) => {
            arrData.push(res.data[i].active);
          })
          .catch((err) => {
            throw err;
          });
        date++;
      }
      this.labels = arrDate;
      this.chart.dataSet = arrData;
      const chartData = {
        type: "bar",
        data: {
          labels: this.labels,
          datasets: [
            {
              label: "Confirmed COVID-19 Cases",
              data: this.chart.dataSet,
              backgroundColor: "rgb(255,0,0)",
              borderColor: "#b74747",
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                },
              },
            ],
          },
        },
      };
      this.chartData = chartData;
    },
  },
  mounted() {
    this.getDataGlobal();
    this.getAllCasesGlobal();
    this.makeChart();
    this.$nextTick(() => {
      const ctx = document.getElementById("chart-canvas");
      const chart = new Chart(ctx, this.chartData);
      setTimeout(function () {
        chart.update();
      }, 5000);
    });
  },
};
</script>
