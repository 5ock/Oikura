<template>
  <div id="app">
    <HeaderBar />
    <Oikura @test="ttt"/>
  </div>
</template>

<script>
import Oikura from './components/oikura';
import HeaderBar from './components/headerBar';
 
export default {
  name: 'App',
  components: {
    HeaderBar,
    Oikura
  },
  methods: {
    switchLang(lang) {
      this.$i18n.locale = lang;
    },
    ttt(a) {
      console.log(a);
    }
  }
}
</script>

<style scope>
body {
  background-color:#rgb(240, 221, 209);
}
</style>
