"use strict";

export default {
  //AGENDA
  updateUsers({ commit }, users) {
    commit("mutateUpdateUsers", users);
  }
};
