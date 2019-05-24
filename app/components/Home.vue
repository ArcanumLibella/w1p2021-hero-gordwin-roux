<template>
  <div class="home">
    <h2>VERY BAD</h2>
    <h1>ROADTRIP</h1>
    <h3>On the road again !</h3>
    <section class="buttons">
      <router-link class="home__button" to="/characters">START</router-link>
    </section>
  </div>
</template>

<script>
import countService from "../services/countService";
import characterService from "../services/characterService";

export default {
  data() {
    return {
      message: "test",
      character: characterService.set()
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>
