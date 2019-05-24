<template>
  <div class="game">
    <audio autoplay pause onclick="button" class="audio" ref="audio" v-model="audio">
      <source src="../assets/audio/lovelyroad.mp3">
    </audio>

    <span class="audio-mute play" @click="toggleMute()" ref="audioToggle">►</span>

    <h2>{{ step.title }}</h2>
    <section class="cards">
      <!--<transition name="scale">-->
      <article v-for="(action, index) in step.actions" :key="index">
        <div class="card" v-if="canDo(action)" @click="doAction(action)">
          <div class="button__action">
            <router-link :to="action.to.toString()">{{ action.label }}</router-link>
          </div>
          <img v-if="action.image" v-bind:src="action.image">
          <div v-if="action.object"></div>
        </div>
      </article>
      <!--</transition> -->
    </section>
  </div>
</template>

<script>
import game from "../data";
import objectService from "../services/objectService";
import powerService from "../services/powerService";
import characterService from "../services/characterService";

export default {
  data: function() {
    return {
      step: this.getStep()
    };
  },
  mounted: function() {
    console.log("mounted", this);
  },
  watch: {
    "$route.params.id"(to, from) {
      var pageId = parseInt(this.$route.params.id);
      localStorage.setItem("gamePageId", pageId);
      this.step = this.getStep();
    }
  },
  methods: {
    getStep() {
      return game.steps.find(step => {
        // localStorage.setItem('gameStep', );
        return step.id === parseInt(this.$route.params.id);
      });
    },
    canDo(action) {
      // Si l'on a pas besoin d'objet
      console.log(action.object);
      if (!action.object) {
        console.log("Etape sans besoin d'objet");
        return true;
      } else {
        //
        console.log("Etape avec besoin d'objet");
        const hasObject = objectService.has(action.object);
        return hasObject;
      }
    },
    doAction(action) {
      // console.log("Etape dévérouillée");
      if (action.object === "Porte-Monnaie") {
        console.log("Etape dévérouillée !");
      }
    },
    toggleMute() {
      var audio = this.$refs["audio"];
      var audioToggle = this.$refs["audioToggle"];
      if (audio.paused) {
        audio.play();
        audioToggle.classList.remove("pause");
      } else {
        audio.pause();
        audioToggle.classList.add("pause");
      }
    }
    // superPower(power) {
    //   console.log(action.power);
    //   if (!action.power) {
    //     console.log("Pas besoin de pouvoir");
    //     return true;
    //   } else { //
    //   console.log("Besoin de pouvoir")
    //   const hasPower = powerService.has(action.power);
    //   return hasPower;
    // if (this.character.name === "Pamela") {
    //   console.log("Tu as choisi Pamela")
    // }
    // }
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
</style>