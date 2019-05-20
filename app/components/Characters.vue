<template>
  <div class="game">
    <h2>Choisis ton personnage !</h2>
    <h3>"Et choisi le bien, ton choix aura une incidence sur la suite du jeu ;)"</h3>

    <section class="cards">
      <Character
        class="card"
        v-for="(character, index) in characters"
        v-bind:character="character"
        :key="index"
      >
        <img v-bind:src="characters.image">
      </Character>
    </section>

    <section>
      <router-link class="game__button" to="/">HOME</router-link>
      <router-link class="game__button" to="/objects">CONTINUE</router-link>
    </section>
  </div>
</template>

<script>
import Character from "./Character.vue";
import Game from "./Game.vue";

export default {
  data: function() {
    return {
      characters: [
        {
          name: "PAMELA",
          speciality: "Force surhumaine",
          sexe: "Femme",
          image: "../assets/images/bambi_mother.jpg"
        },
        {
          name: "STAN",
          speciality: "Charme légendaire",
          sexe: "Homme"
        }
      ]
    };
  },
  components: {
    Character
  }
};
</script>
