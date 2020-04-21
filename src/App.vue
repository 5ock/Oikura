<template>
  <div id="app">
    <HeaderBar />
    <Oikura />
    <ResultChart />
  </div>
</template>

<script>
import Oikura from './components/oikura';
import HeaderBar from './components/headerBar';
import ResultChart from './components/resultChart';
import './assets/css/style.css'
 
export default {
  name: 'App',
  components: {
    HeaderBar,
    Oikura,
    ResultChart
  },
  data() {
    return {
    }
  },
  methods: {
    switchLang(lang) {
      this.$i18n.locale = lang;
    },
  }
}
</script>

<style scope>

</style>
