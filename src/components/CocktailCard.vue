<template>
  <v-card max-width="400">
    <v-img class="white--text align-end" height="200px" :src="cocktail.img">
      <v-card-title>{{cocktail.title}}</v-card-title>
    </v-img>
    <ul>
      <li v-for="(ing, index) in cocktail.ingredients" :key="index">{{ing.name}}</li>
    </ul>
  </v-card>
</template>

<script>
export default {
  name: "CocktailCard",
  props: {
    cocktail: {
      type: Object,
      required: true
    }
  }
};
</script>
