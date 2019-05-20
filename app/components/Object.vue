<template>
  <transition name="scale">
    <article class="object" :class="{'object--main': object.main}">
      <h5>{{ object.name }}</h5>

      <button class="character__button" @click="choose">CHOISIR {{ object.name }}</button>
    </article>
  </transition>
</template>

<script>
import characterService from "../services/characterService";

export default {
  props: ["object"],
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
      console.log(this.object.name);
      characterService.set(this.object.name);
    }
  }
};
</script>