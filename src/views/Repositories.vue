<template>
  <div class="repositories">
    <h2>Repositories page</h2>
    <v-card color="#F2F2F2" flat v-for="(user, index) in users" :key="index">
      <v-row row wrap align="center" justify="center" class="ma-2 pa-2">
        <v-col cols="1">
          <v-avatar size="60">
            <img :src="loadCorrectImage(user)" />
          </v-avatar>
        </v-col>
        <v-col cols="10">
          <h3 v-text="user.nickName"></h3>
          <div
            v-text="user.name"
            :id="`list-item-${index}`"
            class="subtitle-1"
          ></div>
          <div class="caption">{{ user.github_url }}</div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="1">
          <v-btn large icon text @click="openRepositoryLink(user.github_url)">
            <v-icon color="grey">
              mdi-open-in-new
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
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
        : require("@/assets/male.png");
    },
    openRepositoryLink(userGithubUrl) {
      window.open(userGithubUrl, "_blank");
    }
  }
};
</script>
