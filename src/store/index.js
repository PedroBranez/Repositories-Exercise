import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

import usersData from "@/store/data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: usersData,
  actions,
  mutations,
  getters,
  modules: {}
});
