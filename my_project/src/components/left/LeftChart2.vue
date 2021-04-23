<template>
  <div class="chart2">
    <p class="graduationText">竞赛成绩</p>
    <img src="../../assets/titleLine.png" class="titleLine" />
    <div id="left2" class="echarts"></div>
    <div class="legend1"></div>
    <div class="legend2"></div>
    <div class="text1">国赛</div>
    <div class="text2">省赛</div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";

export default {
  name: "LeftChart1",
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
        .get("http://localhost:8888/competition")
        .then((res) => {
          this.data = res.data.data;
          this.data.map((item) => {
            this.amount.push(item.amount);
          });
          this.setLeftChart2(this.amount);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    setLeftChart2(amount) {
      var chartDom = document.getElementById("left2");
      var myChart = echarts.init(chartDom, { width: "200px", height: "200px" });
      var LeftOption2;

      LeftOption2 = {
        xAxis: {
          type: "category",
          data: ["一等奖", "二等奖", "三等奖"],
        },
        yAxis: {
          type: "value",
        },
        grid: {
          left: "20%",
          top: 10,
          width: 200,
          height: 110,
        },
        series: [
          {
            data: [amount[0], amount[1], amount[2]],
            type: "bar",
            itemStyle: { color: "#11C372" },
          },
          {
            data: [amount[3], amount[4], amount[5]],
            type: "bar",
            itemStyle: { color: "#009DFF" },
          },
        ],
      };

      myChart.setOption(LeftOption2);
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
  top: 0;
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
  top: 40px;
}

.echarts {
  position: absolute;
  width: 300px;
  height: 300px;
  top: 55px;
}

.legend1 {
  position: absolute;
  top: 202px;
  left: 100px;
  width: 16px;
  height: 8px;
  border-radius: 3px;
  background-color: #11c372;
}

.legend2 {
  position: absolute;
  top: 202px;
  left: 170px;
  width: 16px;
  height: 8px;
  border-radius: 3px;
  background-color: #009dff;
}

.text1 {
  position: absolute;
  left: 120px;
  top: 200px;
  width: 24px;
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
  top: 200px;
  width: 24px;
  height: 12px;
  opacity: 0.6;
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  line-height: 12px;
  margin: 0;
}
</style>