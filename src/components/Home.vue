<template>
<div class="home_background">
  <br>
  <div>
    <b-row>
      <b-col sm="1" md="auto">
        <div>
          <img id="logo" src="@/assets/images/RadarLogo.png" /> 
        </div>
      </b-col>
    </b-row>
    <br>
  </div>
  <br>
  <div id="atention_box">
    <h4>*ATENÇÂO: Este site foi criado com o intuito de reunir informações para ajudar os moradores da cidade de Manaus durante a pandemia do covid-19.</h4>
  </div>
  <br>
  <div>
    <b-col>
      <button id="home_button">Oxigênio</button>
      <button id="home_button">Equipamentos Hospitalares</button>
      <button id="home_button">Doação</button>
    </b-col>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../assets/Styles/Home.css";
</style>
