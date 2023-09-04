import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Counters from "@/views/Counters.vue";
import TestView from "@/views/TestView.vue";
import ImagesView from "@/views/ImagesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/counters',
    name: 'Counters',
    component: Counters,
  },
  {
    path: '/testview',
    name: 'TestComponent',
    component: TestView,
  },
  {
    path: '/images',
    name: 'Images',
    component: ImagesView,
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
    path: "/characters",
    name: "Characters",
    component: () =>
      import("../components/characters/Characters.vue"),
  },
  {
    path: "/directives",
    name: "Directives",
    component: () =>
      import("../components/testcomponent/Directives.vue"),
  },
  {
    path: "/forms",
    name: "Forms",
    component: () =>
      import("../components/testcomponent/form/Form.vue"),
  },
  {
    path: "/privacypolicy",
    name: "PrivacyPolicy",
    component: () =>
      import("../views/PrivacyPolicy.vue"),
  },
  {
    path: "/termsofservice",
    name: "TermsOfService",
    component: () =>
      import("../views/TermsOfService.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
