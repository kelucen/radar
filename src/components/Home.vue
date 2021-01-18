<template>
<div class="home_background">
   <img id="logo" src="@/assets/images/RadarLogo.png" /> 
   <br>
      <b-alert show variant="secondary" style="margin-left: 2em; margin-right: 2em;"><a style=" margin-left: 5em">*ATENÇÂO: Este site foi criado com o intuito de reunir informações para ajudar os moradores da cidade de Manaus durante a pandemia do covid-19.</a></b-alert>
  <br>
  <div class="center_button">
    <b-col>
      <!-- <button id="home_button">Oxigênio</button> -->
      <button id="home_button" @click="$router.push('/equipamentos')">Equipamentos Hospitalares</button>
      <!-- <button id="home_button">Doação</button> -->
    </b-col>
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
