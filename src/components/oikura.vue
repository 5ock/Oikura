<template>
  <div class="oikura">
    <div class="block_buyPrice">
      <div class="textCenter">{{ $t("Buy Price") }}</div>
      <input type="text" class="inputStyle" v-model="buyPrice">
    </div>
    <div class="block_weekAM">
      <div class="day">
        <div class="textCenter">{{ $t("Mon") }} - {{ $t("AM") }}</div>
        <input type="text" class="inputStyle_week" v-model="sellPrice.sellMon_AM">
        <div class="textCenter">{{ $t("Mon") }} - {{ $t("PM")}}</div>
        <input type="text" class="inputStyle_week" v-model="sellPrice.sellMon_PM">
      </div>
      <div class="day">
        <div class="textCenter">{{ $t("Tue") }} - {{ $t("AM") }}</div>
        <input type="text" class="inputStyle_week" v-model="sellPrice.sellTue_AM">
        <div class="textCenter">{{ $t("Tue") }} - {{ $t("PM")}}</div>
        <input type="text" class="inputStyle_week" v-model="sellPrice.sellTue_PM">
      </div>
      <div class="day">
        <div class="textCenter">{{ $t("Wed") }} - {{ $t("AM") }}</div>
        <input type="text" class="inputStyle_week" v-model="sellPrice.sellWed_AM">
        <div class="textCenter">{{ $t("Wed") }} - {{ $t("PM")}}</div>
        <input type="text" class="inputStyle_week" v-model="sellPrice.sellWed_PM">
      </div>
      <div class="day">
        <div class="textCenter">{{ $t("Thu") }} - {{ $t("AM") }}</div>
        <input type="text" class="inputStyle_week" v-model="sellPrice.sellThu_AM">
        <div class="textCenter">{{ $t("Thu") }} - {{ $t("PM")}}</div>
        <input type="text" class="inputStyle_week" v-model="sellPrice.sellThu_PM">
      </div>
      <div class="day">
        <div class="textCenter">{{ $t("Fri") }} - {{ $t("AM") }}</div>
        <input type="text" class="inputStyle_week" v-model="sellPrice.sellFri_AM">
        <div class="textCenter">{{ $t("Fri") }} - {{ $t("PM")}}</div>
        <input type="text" class="inputStyle_week" v-model="sellPrice.sellFri_PM">
      </div>
      <div class="day">
        <div class="textCenter">{{ $t("Sat") }} - {{ $t("AM") }}</div>
        <input type="text" class="inputStyle_week" v-model="sellPrice.sellSat_AM">
        <div class="textCenter">{{ $t("Sat") }} - {{ $t("PM")}}</div>
        <input type="text" class="inputStyle_week" v-model="sellPrice.sellSat_PM">
      </div>
    </div>
    <div class="block_btn">
      <button class="btn" @click="calculatorData">{{ $t("Calculator") }}</button>
      <button class="btn" @click="clearData">{{ $t("Clear Data") }}</button>
    </div>
  </div>
</template>

<script>
// https://forum.gamer.com.tw/C.php?bsn=7287&snA=3935
// https://forum.gamer.com.tw/C.php?bsn=7287&snA=4238
import analyze_possibilities from '../assets/js/predictions';

export default {
  name: 'oikura',
  data () {
    return {
      buyPrice: "",
      sellPrice: {
        sellMon_AM: "",
        sellMon_PM: "",
        sellTue_AM: "",
        sellTue_PM: "",
        sellWed_AM: "",
        sellWed_PM: "",
        sellThu_AM: "",
        sellThu_PM: "",
        sellFri_AM: "",
        sellFri_PM: "",
        sellSat_AM: "",
        sellSat_PM: "",
      },
      predictionPrice: {
        mon_AM_high: "",
        mon_AM_low: "",
        mon_PM_high: "",
        mon_PM_low: "",
        tue_AM_high: "",
        tue_AM_low: "",
        tue_PM_high: "",
        tue_PM_low: "",
        wed_AM_high: "",
        wed_AM_low: "",
        wed_PM_high: "",
        wed_PM_low: "",
        thu_AM_high: "",
        thu_AM_low: "",
        thu_PM_high: "",
        thu_PM_low: "",
        fri_AM_high: "",
        fri_AM_low: "",
        fri_PM_high: "",
        fri_PM_low: "",
        sat_AM_high: "",
        sat_AM_low: "",
        sat_PM_high: "",
        sat_PM_low: "",
      }
    }
  },
  mounted() {
  },
  methods:{
    clearData() {
      for(let i in this.price) {
        this.price[i] = "";
      }
    },
    calculatorData() {
      for(let i in this.predictionPrice) {
        this.predictionPrice[i] = '';
      }

      let sellPrice = [this.buyPrice, this.buyPrice];
      for(let i in this.sellPrice) {
        let price = this.sellPrice[i] ? this.sellPrice[i] : NaN;
        sellPrice.push(price);
      }

      let analyzeResult = analyze_possibilities(sellPrice);

      console.log(analyzeResult);

      // this.$emit('test', 123);
    }
  }
}
</script>

<style scoped>
</style>
