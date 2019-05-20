<template>
  <div class="game">
    <h2>{{ step.title }}</h2>
    <section class="cards">
      <article
        class="card"
        v-for="action in step.actions"
        @click="doAction(action)"
        v-if="canDo(action)">
        <img v-bind:src="step.image">
        <router-link :to="action.to.toString()">{{ action.label }}</router-link>
      </article>
      <!-- <li
      v-bind:style="{ 'background-image': 'url('+ require('../assets/images/background_strit.jpg' + step.image) + ')'}">
      </li>-->
  </div>
</template>

<script>
import game from "../data.json";
console.log(game);

export default {
  data: function() {
    return {
      step: this.getStep(),
      cover: require("../assets/images/bambi_mother.jpg")
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
    canDo() {
      return true;
    },
    doAction() {
      
    }
  }
};
</script>