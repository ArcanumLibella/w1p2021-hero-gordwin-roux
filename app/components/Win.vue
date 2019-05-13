<template>
  <div class="big-header">
    <h1>{{ message }} - {{ character }}</h1>
    <h2>Tu as gagné</h2>
    <br>
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