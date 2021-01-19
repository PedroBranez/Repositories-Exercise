<template>
  <div class="repositories">
    <v-list>
      <v-list-item v-for="(user, index) in users" :key="index">
        <v-list-item-avatar>
          <v-img
            :alt="`${user.nickName} avatar`"
            :src="user.avatar_url"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            v-text="user.name"
            :id="`list-item-${index}`"
          ></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon color="grey">
            mdi-open-in-new
          </v-icon>
        </v-list-item-icon>
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
  }
};
</script>
