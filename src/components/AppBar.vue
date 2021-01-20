<template>
  <div id="app">
    <v-app-bar app color="#FBC02D" dark>
      <v-btn
        v-if="currentRouteName != 'Index'"
        icon
        @click="redirectToView('')"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn v-if="currentRouteName != 'Repositories'" icon disabled>
        <v-avatar size="40">
          <img
            src="https://avatars1.githubusercontent.com/u/42975333?s=400&v=4"
            alt=""
          />
        </v-avatar>
      </v-btn>
      <v-toolbar-title>Repositories Exercise</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        rounded
        v-if="currentRouteName != 'Repositories'"
        @click="redirectToView('repositories')"
        color="#512DA8"
      >
        Repositories
        <v-icon class="ml-1">mdi-source-repository-multiple</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "App",
  data: () => ({}),
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {
    redirectToView(route) {
      this.$router.push(`/${route}`);
    }
  }
};
</script>
