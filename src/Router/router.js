//Routing
import AboutMe from "@/Pages/About-me.vue";
import Home from "@/Pages/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: AboutMe,
    },
  ],
});

export default router;
