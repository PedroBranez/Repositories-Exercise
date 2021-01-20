<template>
  <div class="repositories">
    <h2>Repositories page</h2>
    <v-card color="#F2F2F2" flat v-for="(user, index) in users" :key="index">
      <v-row row wrap justify-space-around class="ma-2 pa-2">
        <v-col cols="1">
          <v-avatar size="50">
            <img :src="loadCorrectImage(user)" />
          </v-avatar>
        </v-col>
        <v-col>
          <h4 v-text="user.nickName" :id="`list-item-${index}`"></h4>
          <span v-text="user.name"></span>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="1">
          <v-btn text @click="openRepositoryLink(user.github_url)">
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
