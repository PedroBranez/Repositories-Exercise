import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Repositories from "../views/Repositories.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/repositories",
    name: "Repositories",
    component: Repositories
  }
];

const router = new VueRouter({
  routes
});

export default router;
