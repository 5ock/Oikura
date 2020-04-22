<template>
  <div class="oikura">
      <ve-pie v-if="showPie" :data="pData" :settings="pChartSettings" ></ve-pie>
    </div>
 </div>
</template>

<script> 
export default {
  props: ['pieData'],
  name: 'resultChart',
  data() {
    return {
      pChartSettings: {type:'pie'},
      pData: {
        columns: [this.$t('Pattern'), this.$t('Probability')],
        rows: []
      },
      showPie: false,
    }
  },
  watch: {
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
</style>
