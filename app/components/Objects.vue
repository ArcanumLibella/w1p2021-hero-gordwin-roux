<template>
  <div class="game">
    <h2>Choisis 3 objets !</h2>
    <h3>"Et choisis les bien, ton choix aura une incidence sur la suite du jeu..."</h3>

    <section class="objects">
      <Object class="object" v-for="(object, index) in objects" v-bind:object="object" :key="index"></Object>
    </section>

    <section class="buttons">
      <router-link class="game__button" to="/">HOME</router-link>
      <router-link class="game__button" to="/game/0">LET'S GO !</router-link>
    </section>
  </div>
</template>

<script>
import Object from "./Object.vue";
import Game from "./Game.vue";
import objectService from "../services/objectService";

export default {
  data: function() {
    return {
      objects: [
        {
          name: "Carambar"
        },
        {
          name: "Crick"
        },
        {
          name: "Coussin"
        },
        {
          name: "Porte-monnaie"
        },
        {
          name: "Epée en acier Valyrien"
        },
        {
          name: "GPS"
        },
        {
          name: "Coton-tige"
        },
        {
          name: "Bombe anti-moustique"
        },
        {
          name: "Tronçonneuse"
        },
        {
          name: "Macbook"
        },
        {
          name: "Téléphone"
        },
        {
          name: "Couverture de survie"
        },
        {
          name: "Pot de vin"
        },
        {
          name: "Clé"
        },
        {
          name: "Taboulet"
        },
        {
          name: "Papiers du véhicule"
        },
        {
          name: "Loupe"
        },
        {
          name: "Clé à molette"
        },
        {
          name: "Cintre"
        },
        {
          name: "Bouteille"
        }
      ]
    };
  },
  components: {
    Object
  }
};
</script>
