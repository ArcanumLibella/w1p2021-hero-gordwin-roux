<template>
  <div class="game">
    <audio  autoplay 
            pause 
            onclick="button" 
            class="audio" 
            ref="audio" 
            v-model="audio">
      <source src="../assets/audio/lovelyroad.mp3"/> 
      
    </audio> 
    <span class="audio-mute play"
          @click="toggleMute()"
          ref="audioToggle">
          ►
    </span>
    
    <h2>{{ step.title }}</h2>
    <section class="cards">
      <article v-for="(action, index) in step.actions" :key="index">
        <div  class="card"
              v-if="canDo(action)"
              @click="doAction(action)">
              <router-link :to="action.to.toString()">{{ action.label }}</router-link>
              <img v-if="action.image" v-bind:src="action.image">
              <div v-if="action.object"></div>
        </div>
      </article> 
    </section> 
  </div>
</template>

<script>
  import game from "../data";
  import objectService from '../services/objectService';

  export default {
    data: function() {
      return {
        audio: null,
        audioToggle: null,
        step: this.getStep(),
        // cover: this.getStep().image,
      };
    },
    mounted: function() {
      console.log("coucou");
    },
    watch: {
      "$route.params.id"(to, from) {
        this.step = this.getStep();
      }
    },
    methods: {
      getStep() {
        return game.steps.find(step => {
          return step.id === parseInt(this.$route.params.id);
        });
      },
      canDo(action) {
        console.log(action.object);
        if (!action.object) {
          console.log("pas d'objet");
          return true;
        } else {
          const hasObject = objectService.has(action.object);
          return hasObject;
        }
      },
      toggleMute() {
        var audio = this.$refs['audio'];
        var audioToggle = this.$refs['audioToggle'];
        if(audio.paused) {
          audio.play();
          audioToggle.classList.remove('pause');
        } else {
          audio.pause();
          audioToggle.classList.add('pause');
        }
      },
      doAction() {
        console.log("ok");
        if (action.object === "Porte-monnaie") {
          console.log("il faut un porte-monnaie !");
        }
      }
    }
  };
</script> 