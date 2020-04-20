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
      if(this.buyPrice == "" || this.sellPrice.sellMon_AM == "") {
        alert(this.$t("Please enter 'Buy Price' and 'Mon AM Price'"));
        return;
      }

      for(let i in this.predictionPrice) {
        this.predictionPrice[i] = '';
      }

      let sellPrice = [this.buyPrice, this.buyPrice];
      for(let i in this.sellPrice) {
        sellPrice.push(this.sellPrice[i]);
      }

      let analyzeResult = analyze_possibilities(sellPrice);

      console.log(analyzeResult);

      // this.$emit('test', 123);
    }
  }
}
</script>

<style scoped>
input {
  border-radius: 5px;
  font-size: 18px;
}
input:focus {
  outline:none;
}
.oikura {
  width: 900px;
  margin: 0 auto;
  background-color: #0d33;
  border: #0d33 1px solid;
  padding-top:20px;
  border-radius: 10px;
}
.block_buyPrice { 
  border-radius: 10px;
  width:400px;
  margin: 0 auto 20px;
  padding: 10px 0;
  text-align: center;
}
.block_btn {
  margin: 0 auto;
  width: 500px;
  text-align:center;
}
.btn {
  margin: 20px 20px;
  width: 120px;
  height: 30px;
}
.day {
  display: inline-block;
  text-align: center;
  width:120px;
  margin: 0 13px;
  padding: 10px 0 10px;
  background-color: #F0DDD1;
  border-radius: 10px;
}
.inputStyle {
  width:300px;
  height:30px;
  padding: 0 5px;
  margin-top:5px;
  text-align: center;
}
.inputStyle_week {
  width:80px;
  height:25px;
  padding: 0 5px;
  text-align: center;
  margin-bottom: 8px;
}
</style>
