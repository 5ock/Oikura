<template>
  <div class="headerBar">
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
</style>
