<template>
  <div id="app">
    <HeaderBar />
    <Oikura @analyzeResult="analyzeResult" @clearData="clearData" />
    <ResultChart :pieData="pieData" :lineData="lineData" />
    <ResultTable :tabelData="tabelData" />
  </div>
</template>

<script>
import Oikura from './components/oikura';
import HeaderBar from './components/headerBar';
import ResultChart from './components/resultChart';
import ResultTable from './components/resultTable';
import './assets/css/style.css'
 
export default {
  name: 'App',
  components: {
    HeaderBar,
    Oikura,
    ResultChart,
    ResultTable
  },
  data() {
    return {
      pattern_result: {
      },
      lineData: [],
      pieData: {},
      tabelData: {},
    }
  },
  methods: {
    switchLang(lang) {
      this.$i18n.locale = lang;
    },
    clearData() {
      this.pieData = {};
      this.tabelData = {};
      this.lineData = {};
    },
    analyzeResult(data) {
      this.tabelData = this.calTableData(data);
      this.pieData = this.calPieData(data);

      this.lineData = data[1];
    },
    // calLineData(data) {
    //   let ary = [];
    //   for(let i=1; i<data.prices.length; i++) {
    //     let obj = {};
    //     obj.max = 
    //   }
    // },
    calPieData(data) {
      let obj = [];
      for(let i=0; i<data.length; i++) {
        if(!obj[data[i].pattern_description]) {
          obj[data[i].pattern_description] = {};
          if(data[i].category_total_probability) {
            obj[data[i].pattern_description].probability = Math.round(Number(data[i].category_total_probability)*100);
          }
        }
      }
      return obj;
    },
    calTableData(data) {
      let ary = [];
      for(let i=1; i<data.length; i++) {
        let obj = {};
        obj.pattern = data[i].pattern_description;
        obj.total_Probability = Math.round(Number(data[i].category_total_probability)*100);
        obj.Probability = Math.round(Number(data[i].probability)*100);
        obj.price = [];
        for(let j=1; j<7; j++) {
          let amVal = (data[i].prices[j*2].min == data[i].prices[j*2].max) ? data[i].prices[j*2].min : (data[i].prices[j*2].min + '-' + data[i].prices[j*2].max);
          let pmVal = (data[i].prices[j*2+1].min == data[i].prices[j*2+1].max) ? data[i].prices[j*2+1].min : (data[i].prices[j*2+1].min + '-' + data[i].prices[j*2+1].max);
          let valObj = {am: amVal, pm: pmVal};

          obj.price.push(valObj);
        }
        ary.push(obj);
      }      
      return ary;
    }
  }
}
</script>

<style scope>

</style>
