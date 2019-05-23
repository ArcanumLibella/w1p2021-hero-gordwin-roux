<template>
  <transition name="scale">
    <div :class="{'object--main': object.main}" @click="choose">
      {{ object.name }}
    </div>
  </transition>
</template>

<script>
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
    choose(e) { 
      // Case if the object is present in the list     
      if(objectService.has(this.object.name) === false) {
        // So, add it in our object list
        objectService.add(this.object.name);

        // Add active class to clicked object => put it in red color
        e.target.classList.add('active');
      } 
      // Case, if the clicked object doesn't exist in the list
      else {
        objectService.remove(this.object.name);

        // Remove class 
        e.target.classList.remove('active');
      }
    }
  }
};
</script>