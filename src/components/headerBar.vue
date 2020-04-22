<template>
  <div class="headerBar">
    <div class="lang-nav">
      <a class="langItem" @click="switchLang('en-us')">English</a> /
      <a class="langItem" @click="switchLang('ja-jp')">日本語</a> /
      <a class="langItem" @click="switchLang('zh-tw')">中文</a>
    </div>
    <div class="titleBar">
      <h1>{{ $t("Turnip Calculator") }}</h1>
    </div>
 </div>
</template>

<script> 
export default {
  name: 'headerBar',
  methods: {
    switchLang(lang) {
      this.$i18n.locale = lang;
    }
  }
}
</script>

<style scope>
.headerBar {
  background-color: #fff;
  width:900px;
  margin: 20px auto 20px;
  text-align: center;
  border-radius: 10px;
}
.titleBar {
  margin-top: 30px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;  
}
.lang-nav {
  position: fixed;
  right: 50px;
  top: 5px;
  z-index: 999;
}
.langItem {
  font-size: 16px;
  cursor: pointer;
}
.langItem:hover {
  color: blue;
  font-weight: 700;
}
</style>
