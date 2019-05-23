<template>
  <div class="lose">

  <video autoplay loop class ="video">
    <source 
    src="../assets/video/winroad.mp4"> 
    </video>

    <h1> YOU WIN </h1>
    <h2> </h2>
    <router-link class="home__button" to="/characters">PLAY AGAIN</router-link>
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