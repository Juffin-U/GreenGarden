import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/leisure",
    name: "LeisurePage",
    component: () => import("@/views/TestPage.vue"),
  },
  {
    path: "/food",
    name: "FoodPage",
    component: () => import("@/views/Food.vue"),
  },
  {
    path: "/loodging",
    name: "LoodgingPage",
    component: () => import("@/views/Lodging.vue"),
  },
  {
    path: "/callback",
    name: "callBack",
    component: () => import("@/views/callBack.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/components/Environment/NotFound.vue"),
  },
  {
    path: "/homePage",
    name: "HomePage",
    component: () => import("@/views/HomePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // document.getElementById("app")?.scrollIntoView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
