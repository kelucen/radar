<template>
  <v-app>
     <nav>
        <v-app-bar text app color="#E37222">          
          <img id="logoApp" @click="$router.push('/')" src="./assets/logo.png"/>
        </v-app-bar>
     </nav>
    <router-view/>
    <footer class="footer_home">
      <div style="font-weight:bold; color: black; display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%; margin-top: 3em">
        <div>Qualquer informação defasada, informar de forma urgente!</div>
        <div> <v-icon >phone_in_talk</v-icon> (92) 99208-8374</div>
        <div><v-icon >phone_in_talk</v-icon>  (92) 98112-9729</div>
      </div>
    </footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style>
@import "./assets/Styles/Home.css";
</style>