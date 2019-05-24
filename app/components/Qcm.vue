<template>
  <div class="game">
    <form name="qcm" id="qcm-test" v-on:submit.prevent="checkForm">
      <h2 class="Youpla">Ils étaient sur ta route</h2>
      <!-- <div class="" v-for="(k, index) in choices"> -->
      <div class v-for="(k, index) in choices">
        <input name="checkbox" type="checkbox" :id="index" v-model="checkboxTest" :value="k.value">
        <label :for="index">{{ k.label }}</label>
      </div>

      <!--compteur externe à virer en prod
<div class="">
    {{ checkboxTest }}
</div>
      -->

      <input type="checkbox" name="choix" value="1">
      <input class="submit-form" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import countService from "../services/countService";
import characterService from "../services/characterService";

// export default {
//   data() {
//     return {
//       message: "Hello Hetic",
//       character: characterService.get()
//     };
//   },
//   methods: {
//     handleClick() {
//       countService.increment();
//     },
//     submit() {
//         console.log('COUCOU');
//     }
//   },
// };

export default {
  data() {
    return {
      checkboxTest: [],
      choices: [
        {
          label: "Le Seigneur des Anneaux",
          value: "F21"
        },
        {
          label: "Le Parrain",
          value: "F2"
        },
        {
          label: "Seven",
          value: "F25"
        },
        {
          label: "Walking Dead",
          value: "F3"
        },
        {
          label: "Forest Gump",
          value: "F14"
        },
        {
          label: "Scarface",
          value: "F5"
        },
        {
          label: "Margin Call",
          value: "F28"
        },

        {
          label: "Thelma et Louise",
          value: "F6"
        },
        {
          label: "Fight Club ",
          value: "F26"
        },

        {
          label: "Harry Potter",
          value: "F7"
        },
        {
          label: "On the Road",
          value: "F44"
        },
        {
          label: "Ray",
          value: "F45"
        },
        {
          label: " Les Bronzés",
          value: "F11"
        },
        {
          label: " Bambi",
          value: "F12"
        },
        {
          label: "Psychose",
          value: "F29"
        },
        {
          label: "Kill Bill",
          value: "F31"
        },
        {
          label: "Hellboy",
          value: "F13"
        },
        {
          label: "La Ligne Verte",
          value: "F15"
        },
        {
          label: "The Dark Knight",
          value: "F17"
        },
        {
          label: "Taxi",
          value: "F4"
        },
        {
          label: "Les Evadés",
          value: "F18"
        },
        {
          label: "Le Loup de Wall-Street",
          value: "F19"
        },
        {
          label: "Drive",
          value: "F32"
        },
        {
          label: "La Liste de Schindler",
          value: "F16"
        },
        {
          label: "Mary à tout prix",
          value: "F1"
        },
        {
          label: "Blanche-Neige",
          value: "F20"
        },
        {
          label: "Bate's Motel",
          value: "F9"
        },
        {
          label: "Casino",
          value: "F22"
        },
        {
          label: "Les gendarmes",
          value: "F23"
        },
        {
          label: "Gladiator",
          value: "F24"
        },
        {
          label: "La Plage",
          value: "F8"
        }
      ]
    };
  },
  props: ["checkbox"],
  methods: {
    checkForm: function() {
      var goodAnswersList = [
        "F1",
        "F2",
        "F3",
        "F4",
        "F5",
        "F6",
        "F7",
        "F8",
        "F9",
        "F10",
        "F11",
        "F13",
        "F12",
        "F19",
        "F21",
        "F23",
        "F31",
        "F32"
      ];
      var counterGoodAnswer = 0;
      var counterBadAnswer = 0;

      for (var i = 0; i < this.checkboxTest.length; i++) {
        var item = this.checkboxTest[i];
        if (goodAnswersList.indexOf(item) !== -1) {
          // console.log('YEAH BONNE REPONSE POUR : ' + item);
          counterGoodAnswer++;
        } else {
          // console.log('BOUH MAUVAISE REPONSE POUR : ' + item);
          counterBadAnswer++;
        }
      }

      if (counterGoodAnswer >= 8 && counterBadAnswer == 0) {
        this.$router.push("/Win");
      } else {
        this.$router.push("/Lose");
      }

      /*  
            /* ICI ma condition pour vérifier mes réponses QUI FONCTIONNE NE PAS SUPRIMMER COMMENTAIRE SUIVANT : */
      /*if(counterGoodAnswer == 12 && counterBadAnswer == 0 ) {
                console.log('TU AS GAGNÉ!!!!');    
            } 
            else {
                console.log('TU AS PERDU @@@ LOSER ')
            } */

      /* console.log('BONNES REPONSES : ' + counterGoodAnswer);
            console.log('MAUVAISES REPONSES : ' + counterBadAnswer); */
      // console.log(this.checkboxTest);
    }
  }
};

/* function test(cases) {
  var rep=true;
  for (i=0; i< cases.length; i++) { 
   if (cases[i].value==0 && cases[i].checked==false) rep=false;
   if (cases[i].value==1 && cases[i].checked==true && cases[i].unchecked==true ) rep=false;
  }
  return rep;
 }
  */
</script>