"use strict";

export default {
  updateUsers({ commit }, users) {
    commit("mutateUpdateUsers", users);
  }
};
