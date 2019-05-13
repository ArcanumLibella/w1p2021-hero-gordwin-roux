<template>
  <transition name="scale">
    <article class="character" :class="{'character--main': character.main}">
      <h2>{{ character.name }}</h2>
      <p>{{ character.speciality }}</p>
      <p>{{ character.sexe }}</p>

      <button class="button" @click="choose">Choisir {{ character.name }}</button>
      <br>
      <br>
    </article>
  </transition>
</template>

<script>
import characterService from "../services/characterService";

export default {
  props: ["character"],
  data: function() {
    return {
      show: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 2000);
  },
  methods: {
    choose() {
      console.log(this.character.name);
      characterService.set(this.character.name);
    }
  }
};
</script>

<style lang="scss" scoped>
// Tout le temps
.scale-enter-active {
  transition: transform 10s;
}

// 1ère frame
.scale-enter {
  transform: scale(0) rotate(180deg);
}

// à partir de la seconde frame
.scale-enter-to {
  transform: scale(2) rotate(-270deg);
}

.character--main {
  color: blue;
}

h2 {
  font-size: 28px;
  font-weight: bold;
}
h3 {
  font-size: 20px;
  font-weight: normal;
}
</style>