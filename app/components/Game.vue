<template>
  <div class="game">
    <h2>{{ step.title }}</h2>
    <section class="cards">
      <article v-for="(action, index) in step.actions"
        :key="index"
      >
        <div
          class="card"
          v-if="canDo(action)"
          @click="doAction(action)"
        >
          <router-link :to="action.to.toString()">{{ action.label }}</router-link>
          <img v-if="action.image" v-bind:src="action.image">
        </div>
      </article>
      <!-- <li
      v-bind:style="{ 'background-image': 'url('+ require('../assets/images/background_strit.jpg' + step.image) + ')'}">
      </li>-->
  </div>
</template>

<script>
import game from "../data";
import objectService from '../services/objectService';

export default {
  data: function() {
    return {
      step: this.getStep(),
      cover: this.getStep().image,
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
      if (!action.object)
        return true;

      const hasObject = objectService.has(action.object);
      return hasObject;
    },
    doAction() {
      
    },
    // nextFrame() {
    //   if (id.801 === "Lose") {
    //     this.$emit('Lose');
    //   }
    // }
  }
};
</script>