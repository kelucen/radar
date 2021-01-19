<template>
  <v-app>
     <nav>
        <v-app-bar text app color="#E37222">          
           <h4 style="color:white; font-weight:bold; cursor:default" @click="$router.push('/')">RADAR</h4> 

        </v-app-bar>
     </nav>
    <router-view/>
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
