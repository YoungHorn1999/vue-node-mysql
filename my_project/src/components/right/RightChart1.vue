<template>
  <div class="chart1">
    <p class="graduationText">本科硕士比例</p>
    <img src="../../assets/titleLine.png" class="titleLine" />
    <div>
      <div class="point1"></div>
      <div class="point2"></div>
    </div>
    <div>
      <p class="chart1Text1">本科</p>
      <p class="chart1Text2">硕士</p>
    </div>
    <div>
      <p class="chart1Num1">{{ this.amount[0] }}</p>
      <p class="chart1Num2">{{ this.amount[1] }}</p>
    </div>
    <div id="right1" class="graduation"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";

export default {
  name: "RightChart1",
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
        .get("http://localhost:8888/student")
        .then((res) => {
          this.data = res.data.data;
          this.data.map((item) => {
            this.amount.push(item.amount);
          });
          this.setRightChart1(this.amount);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    setRightChart1(amount) {
      var chartDom = document.getElementById("right1");
      var myChart = echarts.init(chartDom, { width: "200px", height: "200px" });
      var RightOption1;

      RightOption1 = {
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            type: "pie",
            radius: "50%",
            top: "5%",
            labelLine: {
              show: false,
            },
            label: {
              show: false,
            },
            data: [
              {
                value: amount[0],
                name: "本科生",
                itemStyle: { color: "#009DFF" },
              },
              {
                value: amount[1],
                name: "研究生",
                itemStyle: { color: "#11C372" },
              },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
              },
            },
          },
        ],
      };

      myChart.setOption(RightOption1);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
#right1 {
  width: 190px;
  height: 170px;
}
.title {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -20px;
  font-size: 30px;
  color: #ffffff;
}
.navBarContainer {
  position: relative;
}
.graduationText {
  position: absolute;
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
.chart1 {
  position: absolute;
}
.titleLine {
  display: block;
  position: absolute;
  width: 250px;
  left: 30px;
  top: 40px;
}
.point1 {
  position: absolute;
  left: 160px;
  top: 90px;
  width: 8px;
  height: 8px;
  opacity: 1;
  background: #009dff;
  border-radius: 4px;
}
.point2 {
  position: absolute;
  left: 160px;
  top: 110px;
  width: 8px;
  height: 8px;
  opacity: 1;
  background: #11c372;
  border-radius: 4px;
}
.chart1Text1 {
  position: absolute;
  left: 180px;
  top: 89px;
  width: 24px;
  height: 12px;
  opacity: 0.6;
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  line-height: 12px;
  margin: 0;
}
.chart1Text2 {
  position: absolute;
  left: 180px;
  top: 109px;
  width: 24px;
  height: 12px;
  opacity: 0.6;
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  line-height: 12px;
  margin: 0;
}
.chart1Num1 {
  position: absolute;
  left: 230px;
  top: 89px;
  width: 24px;
  height: 12px;
  opacity: 0.6;
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  line-height: 12px;
  margin: 0;
}
.chart1Num2 {
  position: absolute;
  left: 230px;
  top: 109px;
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