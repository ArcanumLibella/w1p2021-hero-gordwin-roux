<template>
  <div class="game">
    <h2>Choisis ton personnage !</h2>
    <h3>"Et choisi le bien, ton choix aura une incidence sur la suite du jeu..."</h3>

    <section class="cards">
      <Character
        class="card"
        v-for="(character, index) in characters"
        v-bind:character="character"
        :key="index"
      >
    </section>

    <section class="buttons">
      <!-- <router-link class="game__button" to="/">HOME</router-link> -->
      <router-link class="game__button" to="/objects">CONTINUE</router-link>
    </section>
  </div>
</template>

<script>
import Character from "./Character.vue";
import Game from "./Game.vue";
import characterService from "../services/characterService";
import powerService from '../services/powerService';


export default {
  data: function() {
    return {
      characters: [
        {
          name: "PAMELA",
          power: "Force surhumaine",
          sexe: "Femme",
          image: require("../assets/images/roadtrip2.jpg")
        },
        {
          name: "STAN",
          power: "Charme légendaire",
          sexe: "Homme",
          image: require("../assets/images/roadtrip1.jpg")
        }
      ]
    };
  },
  components: {
    Character
  }
};
</script>
