<template>
  <div class="game">
    <h2>{{ step.title }}</h2>
    <section class="cards">
      <article v-for="(action, index) in step.actions" :key="index">
        <div
          class="card"
          v-if="canDo(action)"
          @click="doAction(action)">

          <router-link :to="action.to.toString()">{{ action.label }}</router-link>
          <img v-if="action.image" v-bind:src="action.image">
          <div v-if="action.object"></div>
        </div>
      </article>
  </div>
</template>

<script>
import game from "../data";
import objectService from '../services/objectService';
console.log(game);

export default {
  data: function() {
    return {
      step: this.getStep(),
      // cover: this.getStep().image,
    };
  },
  mounted: function() {
    console.log("coucou");
  },
  watch: {
    "$route.params.id"(to, from) {
      this.step = this.getStep();
    }
  },
  methods: {
    getStep() {
      return game.steps.find(step => {
        return step.id === parseInt(this.$route.params.id);
      });
    },
    canDo(action) {
      console.log(action.object);
      if (!action.object) {
        console.log("pas d'objet");
        return true;
      } else {
      const hasObject = objectService.has(action.object);
      return hasObject;
      }
    },
    doAction() {
      console.log("ok");
      if (action.object === "Porte-monnaie") {
        console.log("il faut un porte-monnaie !");
      }
    },
  }
};
</script>