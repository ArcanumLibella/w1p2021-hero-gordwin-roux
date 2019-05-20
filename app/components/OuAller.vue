<template>
  <div class="big-header">
    <h1>{{ message }} {{ character }}</h1>
    <h2>Ou aller ?</h2>
    <br>
    <router-link class="button" to="/chemintranquille">A gauche ?</router-link>
    <router-link class="button" to="/chemindangereux">A droite ?</router-link>
    <br>
  </div>
</template>

<script>
import countService from "../services/countService";
import characterService from "../services/characterService";

export default {
  data() {
    return {
      message: "Hello ",
      character: characterService.get()
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>
