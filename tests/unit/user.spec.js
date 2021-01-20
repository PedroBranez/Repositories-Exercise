import { assert } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import Repositories from "@/views/Repositories.vue";
import Index from "@/views/Index.vue";

import Vuex from "vuex";
import Vue from "vue";
import Vuetify from "vuetify";

import actions from "@/store/actions.js";
import mutations from "@/store/mutations.js";
import getters from "@/store/getters.js";
import mockUsers from "./mockUsers";
import vuetify from "../../src/plugins/vuetify";

Vue.use(vuetify);

describe("Users module", () => {
  let localVue;
  let store;
  let vuetify;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);

    vuetify = new Vuetify();

    store = new Vuex.Store({
      state: mockUsers,
      actions,
      mutations,
      getters
    });

    global.requestAnimationFrame = cb => cb();
  });
  it("Verify that the JSON file was read.", () => {
    const wrapper = mount(Repositories, {
      store,
      localVue,
      vuetify
    });
    const initialLength = wrapper.vm.$store.state.users.length;
    assert.notEqual(initialLength, 0);
  });
  it("Validate the rendering of a user.", async () => {
    const wrapper = mount(Repositories, {
      store,
      localVue,
      vuetify
    });
    const userToCheck = wrapper.vm.$store.state.users[1];
    //console.log("DRAW HTML: " + wrapper.html());

    const userRendered = wrapper.find("#list-item-1");

    assert.strictEqual(userRendered.text(), userToCheck.name);
  });
  it("Load a default image for users without avatar_url.", async () => {
    const wrapper = mount(Repositories, {
      store,
      localVue,
      vuetify
    });

    const userWithoutAvatarUrl = {
      github_url: "https://github.com/vuetifyjs",
      name: "Material Component Framework for Vue",
      nickName: "vuetify"
    };

    const imageToRender = wrapper.vm.loadCorrectImage(userWithoutAvatarUrl);
    const defaultImage = require("@/assets/male.png");

    assert.strictEqual(imageToRender, defaultImage);
  });
  it("Cannot upload an empty file.", async () => {
    let alertMessage = "";
    global.alert = msg => {
      alertMessage = msg;
    };
    const wrapper = mount(Index, {
      store,
      localVue,
      vuetify
    });

    wrapper.vm.$data.fileName = null;

    wrapper.vm.processData();

    const errorMessage = "Cannot upload an empty file";

    assert.strictEqual(errorMessage, alertMessage);
  });
  it("can't upload file with wrong fields.", async () => {
    let alertMessage = "";
    global.alert = msg => {
      alertMessage = msg;
    };
    const wrapper = mount(Index, {
      store,
      localVue,
      vuetify
    });

    const incorrectUsersData = {
      users: [
        {
          avatar_url:
            "https://avatars1.githubusercontent.com/u/14101776?s=200&v=4",
          github_url: "https://github.com/flutter",
          name: "Google’s UI toolkit to build apps",
          nickNameSS: "Flutter"
        }
      ]
    };

    wrapper.vm._updateUsers(incorrectUsersData);

    const errorMessage = "JSON file is not in the correct format";

    assert.strictEqual(errorMessage, alertMessage);
  });
  it("Upload a correct file.", async () => {
    let alertMessage = "";
    global.alert = msg => {
      alertMessage = msg;
    };
    const wrapper = mount(Index, {
      store,
      localVue,
      vuetify
    });

    const correctUsersData = {
      users: [
        {
          avatar_url:
            "https://avatars2.githubusercontent.com/u/22138497?s=200&v=4",
          github_url: "https://github.com/vuetifyjs",
          name: "Material Component Framework for Vue",
          nickName: "vuetify"
        }
      ]
    };

    wrapper.vm._updateUsers(correctUsersData);

    const successMessage = "File uploaded";

    assert.strictEqual(successMessage, alertMessage);
  });
  it("Verify that the store changes after a successful update.", async () => {
    global.alert = () => {};
    const wrapper = mount(Index, {
      store,
      localVue,
      vuetify
    });

    const correctUsersData = {
      users: [
        {
          avatar_url:
            "https://avatars2.githubusercontent.com/u/22138497?s=200&v=4",
          github_url: "https://github.com/vuetifyjs",
          name: "Material Component Framework for Vue",
          nickName: "vuetify"
        },
        {
          avatar_url:
            "https://avatars1.githubusercontent.com/u/14101776?s=200&v=4",
          github_url: "https://github.com/flutter",
          name: "Google’s UI toolkit to build apps",
          nickName: "Flutter"
        }
      ]
    };

    wrapper.vm._updateUsers(correctUsersData);

    const newUser = wrapper.vm.$store.state.users[1];

    assert.strictEqual(newUser, correctUsersData.users[1]);
  });
});
