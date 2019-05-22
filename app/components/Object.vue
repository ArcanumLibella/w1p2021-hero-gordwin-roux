<template>
  <transition name="scale">
    <article class="object" :class="{'object--main': object.main}">
      <h5>{{ object.name }}</h5>
      <button class="object__button" @click="choose">CHOISIR</button>
    </article>
  </transition>
</template>

<script>
// import characterService from "../services/characterService";
import objectService from "../services/objectService";

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
      objectService.add(this.object.name);
    }
  }
};
</script>