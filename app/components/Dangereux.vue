<template>
  <div class="big-header">
    <h1>{{ message }} - {{ character }}</h1>
    <h2>Chemin dangereux</h2>
    <br>
    <router-link class="button" to="/ouAller">Revenir</router-link>
    <router-link class="button" to="/piegemortel">Avancer</router-link>
    <br>
  </div>
</template>

<script>
import countService from "../services/countService";
import characterService from "../services/characterService";

export default {
  data() {
    return {
      message: "Hello Hetic",
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
