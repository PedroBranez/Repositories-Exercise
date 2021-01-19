<template>
  <div class="repositories">
    <v-list>
      <v-list-item v-for="(user, index) in users" :key="index">
        <v-list-item-avatar size="50">
          <v-img :src="loadCorrectImage(user)"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            v-text="user.nickName"
            :id="`list-item-${index}`"
          ></v-list-item-title>
          <v-list-item-subtitle v-text="user.name"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn text @click="openRepositoryLink(user.github_url)">
            <v-icon color="grey">
              mdi-open-in-new
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
//import usersData from "@/store/data.json";
import { mapGetters } from "vuex";

export default {
  name: "Repositories",
  data() {
    return {
      //users: usersData.users
    };
  },
  computed: {
    ...mapGetters(["getUsers"]),
    users() {
      return this.getUsers;
    }
  },
  methods: {
    loadCorrectImage(user) {
      return Object.prototype.hasOwnProperty.call(user, "avatar_url")
        ? user.avatar_url
        : require("/src/assets/male.png");
    },
    openRepositoryLink(userGithubUrl) {
      window.open(userGithubUrl, "_blank");
    }
  }
};
</script>
