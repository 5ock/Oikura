<template>
  <div class="oikura">
    <div class="oikura_block">
      <div class="textCenter" style="margin-bottom:5px;">{{ $t("First Time Buy") }}</div>
      <label for="firstNo" class="radioStyle" :class="{ isSelect: firstBuy=='' }">{{ $t("No") }}</label>
      <input id="firstNo" type="radio" value="" v-model="firstBuy" style="display:none">
      <label for="firstYes" class="radioStyle" :class="{ isSelect: firstBuy=='1' }">{{ $t("Yes") }}</label>
      <input id="firstYes" type="radio" value="1" v-model="firstBuy" style="display:none">
    </div>
    <div class="oikura_block">
      <div class="textCenter" style="margin-bottom:5px;">{{ $t("Previous Pattern") }}</div>
      <label for="Forget" class="radioStyle increaseWidth" :class="{ isSelect: maePattern=='-1' }">{{ $t("Forget") }}</label>
      <input id="Forget" type="radio" value="-1" v-model="maePattern" style="display:none">
      <label for="fluctuating" class="radioStyle increaseWidth" :class="{ isSelect: maePattern=='0' }">{{ $t("fluctuating") }}</label>
      <input id="fluctuating" type="radio" value="0" v-model="maePattern" style="display:none">
      <label for="large" class="radioStyle increaseWidth" :class="{ isSelect: maePattern=='1' }">{{ $t("large-spike") }}</label>
      <input id="large" type="radio" value="1" v-model="maePattern" style="display:none">
      <label for="decreasing" class="radioStyle increaseWidth" :class="{ isSelect: maePattern=='2' }">{{ $t("decreasing") }}</label>
      <input id="decreasing" type="radio" value="2" v-model="maePattern" style="display:none">
      <label for="small" class="radioStyle increaseWidth" :class="{ isSelect: maePattern=='3' }">{{ $t("small-spike") }}</label>
      <input id="small" type="radio" value="3" v-model="maePattern" style="display:none">
    </div>
    <div class="oikura_block">
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
import analyze_possibilities from '../assets/js/predictions';

export default {
  name: 'oikura',
  data () {
    return {
      firstBuy: "",
      buyPrice: "",
      maePattern: "-1",
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
    }
  },
  mounted() {
  },
  methods:{
    clearData() {
      this.buyPrice = "";
      for(let i in this.sellPrice) {
        this.sellPrice[i] = "";
      }
      this.$emit('clearData');
    },
    calculatorData() {
      if(this.buyPrice == '') {
        return;
      }
      let sellPrice = [this.buyPrice, this.buyPrice];
      for(let i in this.sellPrice) {
        let price = this.sellPrice[i] ? this.sellPrice[i] : NaN;
        sellPrice.push(price);
      }

      let analyzeResult = analyze_possibilities(sellPrice, this.firstBuy, this.maePattern);

      this.$emit('analyzeResult', analyzeResult);
    }
  }
}
</script>

<style scoped>
.radioStyle {
  border-radius: 10px;
  display: inline-block;
  width: 50px;
  border: 1px solid #ccc;
  color: #000;
  cursor: pointer;
  padding: 1px 5px;
  font-size: 16px;
}
.radioStyle.increaseWidth {
  width: 100px;
}
.isSelect {
  background-color: #1d6a96;
  color: #fff;
}
</style>
