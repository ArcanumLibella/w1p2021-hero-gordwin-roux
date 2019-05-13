<template>
  <div class="big-header">
    <h1>Choix du personnage</h1>
    <br>

    <Character v-for="(character, index) in characters" v-bind:character="character" :key="index"></Character>

    <br>

    <router-link class="button" to="/">Go to Home</router-link>
  </div>
</template>

<script>
import Character from "./Character.vue";
export default {
  data: function() {
    return {
      characters: [
        {
          name: "Pamela",
          speciality: "Force surhumaine",
          sexe: "Fille"
        },
        {
          name: "Stan",
          speciality: "Charme légendaire",
          sexe: "Garçon"
        }
      ]
    };
  },
  components: {
    Character
  }
};
</script>
