<template>
<div class="home_background">
   <!-- <h1 style="color:#E37222; font-weight:bold" @click="$router.push('/')">RADAR</h1> -->
   <img id="logo" src="../assets/logo.png"/>
   <br>
      <b-alert show variant="info" style="margin-left: 2em; margin-right: 2em;"><a style=" margin-left: 1em">*ATENÇÂO: Este site foi criado com o intuito de reunir informações para ajudar os moradores da cidade de Manaus durante a pandemia do covid-19.</a></b-alert>
  <br>
  <div class="center_button">
      <b-button id="home_button" @click="$router.push('/equipamentos')">Equipamentos Hospitalares</b-button>
  </div>

</div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../assets/Styles/Home.css";
</style>
