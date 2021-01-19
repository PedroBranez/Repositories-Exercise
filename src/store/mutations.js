"use strict";

export default {
  mutateupdateUsers(state, users) {
    state.users.splice(0, state.users.length, users);
  }
};
