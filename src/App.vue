<template>
  <v-app>
    <v-app-bar app color="primary" dark></v-app-bar>
    <v-content class="d-flex">
    <div class="d-flex">
      <CocktailCard class="ma-5" v-for="cocktail in coktails" :cocktail="cocktail" :key="cocktail.id"/>
    </div>
    </v-content>
  </v-app>
</template>

<script>
import CocktailCard from "./components/CocktailCard";
import CocktailService from "./services/CocktailService";
export default {
  name: "App",

  components: {
    CocktailCard
  },

  data: () => ({
    coktails: []
  }),

  created() {
    CocktailService.getCocktails().then(response => {
      this.coktails = response.data;
    });
  }
};
</script>
