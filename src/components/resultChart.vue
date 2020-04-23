<template>
  <div class="oikura">
    <div class="blockTitle"><h2>{{ $t("predict result") }}</h2></div>
    <!-- <div class="block_chart"> -->
    <div style="width: 538px; display:inline-block">
      <ve-pie v-if="showPie" :data="pData" :settings="pChartSettings" ></ve-pie>
    </div>

    <div style="width: 538px; display:inline-block">
      <ve-line :data="lData" :settings="chartSettings" :extend="chartExtend"></ve-line>
    </div>
 </div>
</template>

<script> 
export default {
  props: ['pieData', 'lineData'],
  name: 'resultChart',
  data() {
    this.chartExtend = {
      xAxis: {
        boundaryGap: false,
      }
    }
    this.chartSettings = {
      xAxisType: 'category',
      area: true,
      boundaryGap: false
    }
    return {
      lData: {
        columns: ['week', 'max', 'min'],
        rows: []
      },

      pChartSettings: {type:'pie'},
      pData: {
        columns: [this.$t('Pattern'), this.$t('Probability')],
        rows: []
      },
      showPie: false,
    }
  },
  watch: {
    lineData(newVal) {
      this.lData.rows = [];
      let weeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let day = ['AM', 'PM'];
      let j=0, k=0;
      let prices = newVal.prices;
      let test = [];
      if(newVal) {
        for(let i=2; i<prices.length; i++) {
          let weekText = this.$t(weeks[j]) + ' ' + this.$t(day[k]);
          let obj = {week: weekText, max: prices[i].max, min: prices[i].min};
          this.lData.rows.push(obj);
          k++;
          if(i%2==1) {
            k=0
            j++;
          }
        }
      }
    },
    pieData(newVal) {
      this.pData.rows = [];
      for(let i in newVal) {
        if(i != 'all') {
          let obj = {Pattern: this.$t(i.toLowerCase()), Probability: newVal[i].probability};
          this.pData.rows.push(obj);
        }
      }
      if(this.pData.rows.length > 0) {
        this.showPie = true;
      } else {
        this.showPie = false
      }
    }
  },
  methods: {
  }
}
</script>

<style scope>
.block_resultChart {
  
    width: 1080px;
    margin: 0 auto 20px;
    background-color: #fff;
    border: #0d33 1px solid;
    padding-top:20px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
  /* display: flex; */
}
.block_chart {
  display: flex;
  width: 540px;
}
</style>
