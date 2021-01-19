"use strict";

export default {
  mutateUpdateUsers(state, users) {
    state.users.splice(0, state.users.length, users);
    //state.users = users;
  }
};
