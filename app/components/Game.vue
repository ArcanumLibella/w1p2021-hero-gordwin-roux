<template>
<div>
<h1>{{ step.title }}</h1>


  <!-- <img src="{{ step.image }}" alt=""> -->

  <ul>
    <li 
      v-for="action in step.actions"
      @click="doAction(action)"
      v-if="canDo(action)">
        <router-link :to="action.to.toString()">{{ action.label }}</router-link>
    </li>
    <!-- <li
      v-bind:style="{ 'background-image': 'url('+ require('../assets/images/background_strit.jpg' + step.image) + ')'}">
    </li> -->
  </ul>
  </div>
</template>

<script>
  import game from '../data.json';
  console.log(game);

export default {
  data: function() {
    return {
      step: this.getStep(),
      cover: require('../assets/images/background_strit.jpg')
    }
  },
  mounted: function() {
    console.log('coucou')
  },
  watch: {
    '$route.params.id' (to, from) {
      this.step = this.getStep()
    }
  },
  methods: {
    getStep() {
      return game.steps.find(step => {
        return step.id === parseInt(this.$route.params.id)
      })
    },
    canDo() {
      return true
    }
  }
}
</script>