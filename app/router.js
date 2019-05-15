import Vue from "vue";
import Router from "vue-router";

// import des fichiers composents
import Home from "./components/Home.vue";
import OuAller from "./components/OuAller.vue";
import Tranquille from "./components/Tranquille.vue";
import Dangereux from "./components/Dangereux.vue";
import PiegeMortel from "./components/PiegeMortel.vue";
import Lose from "./components/Lose.vue";
import Win from "./components/Win.vue";
import Game from "./components/Game.vue";

// import Page from "./components/Page.vue";
// import Characters from "./components/Characters.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  linkActiveClass: "is-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/ouAller",
      name: "ouAller",
      component: OuAller
    },
    {
      path: "/chemintranquille",
      name: "chemintranquille",
      component: Tranquille
    },
    {
      path: "/chemindangereux",
      name: "chemindangereux",
      component: Dangereux
    },
    {
      path: "/piegemortel",
      name: "piegemortel",
      component: PiegeMortel
    },
    {
      path: "/lose",
      name: "lose",
      component: Lose
    },
    {
      path: "/win",
      name: "win",
      component: Win
    },
    {
      path: "/game/:id",
      name: "game",
      component: Game
    },
    // {
    //   path: "/characters",
    //   name: "characters",
    //   component: Characters
    // },
    // {
    //   path: "/page",
    //   name: "page",
    //   component: Page
    // },
    // {
    //   path: "/object",
    //   name: "object",
    //   component: Objet
    // },
    // {
    //   path: "/step3",
    //   name: "step3",
    //   component: Step3
    // },
    {
      // à laisser en dernier
      path: "*",
      redirect: { name: "home" }
    }
  ]
});

export default router;
