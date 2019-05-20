<template>
  <div class="game">
    <h2>Choisis 3 objects !</h2>
    <h3>"Et choisis les bien, ton choix aura une incidence sur la suite du jeu ;)"</h3>

    <section class="objects">
      <Object class="object" v-for="(object, index) in objects" v-bind:object="object" :key="index"></Object>
    </section>

    <section>
      <router-link class="game__button" to="/">HOME</router-link>
      <router-link class="game__button" to="/game/0">LET'S GO !</router-link>
    </section>
  </div>
</template>

<script>
import Object from "./Object.vue";
import Game from "./Game.vue";

export default {
  data: function() {
    return {
      objects: [
        {
          name: "Carambar"
        },
        {
          name: "GPS"
        },
        {
          name: "Vernis"
        },
        {
          name: "Couverture de survie"
        },
        {
          name: "Papiers"
        },
        {
          name: "Crick"
        },
        {
          name: "GPS"
        },
        {
          name: "Vernis"
        },
        {
          name: "Couverture de survie"
        },
        {
          name: "Papiers"
        },
        {
          name: "Crick"
        }
      ]
    };
  },
  components: {
    Object
  }
};
</script>
