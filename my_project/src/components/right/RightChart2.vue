<template>
  <div class="chart2">
    <p class="graduationText">科研成果</p>
    <img src="../../assets/titleLine.png" class="titleLine" />
    <div id="right2" class="echarts"></div>
    <div class="legend1"></div>
    <div class="legend2"></div>
    <div class="text1">论文数量</div>
    <div class="text2">专利数量</div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";

export default {
  name: "RightChart2",
  components: {},
  data: function () {
    return {
      data: [],
      amount: [],
    };
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:8888/research")
        .then((res) => {
          this.data = res.data.data;
          this.data.map((item) => {
            this.amount.push(item.amount);
          });
          this.setRightChart2(this.amount);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    setRightChart2() {
      var chartDom = document.getElementById("right2");
      var myChart = echarts.init(chartDom, { width: "200px", height: "200px" });
      var RightOption2;

      RightOption2 = {
        xAxis: {
          type: "category",
          data: ["2017", "2018", "2019", "2020"],
        },
        yAxis: {
          type: "value",
        },
        grid: {
          left: "20%",
          top: 12,
          width: 200,
          height: 110,
        },
        series: [
          {
            data: [14, 13, 17, 18],
            type: "line",
            smooth: true,
            itemStyle: { color: "#009DFF" },
            areaStyle: {},
          },
          {
            data: [12, 15, 16, 20],
            type: "line",
            smooth: true,
            itemStyle: { color: "#11C372" },
            areaStyle: {},
          },
        ],
      };

      myChart.setOption(RightOption2);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.chart2 {
  position: absolute;
  left: 0;
  top: 225px;
}

.graduationText {
  position: absolute;
  width: 100px;
  left: 32px;
  bottom: 30px;
  margin-bottom: 0;
  z-index: 1;
  height: 22px;
  opacity: 0.9;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  color: #ffffff;
  line-height: 22px;
}

.titleLine {
  display: block;
  position: absolute;
  width: 250px;
  left: 30px;
  bottom: 23px;
}

.echarts {
  position: absolute;
  width: 300px;
  height: 300px;
  top: -15px;
}

.legend1 {
  position: absolute;
  top: 135px;
  left: 90px;
  width: 16px;
  height: 8px;
  border-radius: 3px;
  background-color: #11c372;
}

.legend2 {
  position: absolute;
  top: 135px;
  left: 170px;
  width: 16px;
  height: 8px;
  border-radius: 3px;
  background-color: #009dff;
}

.text1 {
  position: absolute;
  left: 110px;
  top: 133px;
  width: 50px;
  height: 12px;
  opacity: 0.6;
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  line-height: 12px;
  margin: 0;
}

.text2 {
  position: absolute;
  left: 190px;
  top: 133px;
  width: 50px;
  height: 12px;
  opacity: 0.6;
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  line-height: 12px;
  margin: 0;
}
</style>