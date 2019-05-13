import Vue from "vue";
import Router from "vue-router";

// import des fichiers composents
import Home from "./components/Home.vue";
import Page from "./components/Page.vue";
import Characters from "./components/Characters.vue";

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
      path: "/page",
      name: "page",
      component: Page
    },
    {
      path: "/characters",
      name: "characters",
      component: Characters
    },
    {
      // à laisser en dernier
      path: "*",
      redirect: { name: "home" }
    }
  ]
});

export default router;
