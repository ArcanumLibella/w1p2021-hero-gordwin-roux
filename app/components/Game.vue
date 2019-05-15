<template>
<div>
<h1>{{ step.title }}</h1>
  <ul>
    <li 
      v-for="action in step.actions"
      @click="doAction(action)"
      v-if="canDo(action)">
        <router-link :to="action.to.toString()">{{ action.label }}</router-link>
    </li>
  </ul>
  </div>
</template>

<script>
  import game from '../data.json';
  console.log(game);

export default {
  data: function() {
    return {
      step: this.getStep()
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