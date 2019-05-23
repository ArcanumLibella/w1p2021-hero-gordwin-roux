<template>
  <transition name="scale">
    <article class="character" :class="{'character--main': character.main}" ref="characterItem" @click="choose">
      <h4>{{ character.name }}</h4>
      <p>{{ character.power }}</p>
      <p>{{ character.sexe }}</p>
      <img v-bind:src="character.image">
    </article>
  </transition>
</template>

<script>
import characterService from "../services/characterService";
import powerService from "../services/powerService";

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
      console.log(this.character.name, this.character, );
      this.$refs.characterItem.classList.toggle('active');
      characterService.set(this.character.name);
      characterService.add(this.character.name);
    }
  }
};
</script>

<style lang="scss" scoped>
// Tout le temps
.scale-enter-active {
  transition: transform 3s;
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