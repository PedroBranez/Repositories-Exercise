<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Repositories Exercise</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn target="_blank" text @click="redirectToView('')">
        <span class="mr-2">Index</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn target="_blank" text @click="redirectToView('repositories')">
        <span class="mr-2">Repositories</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    redirectToView(route) {
      this.$router.push(`/${route}`);
    }
  }
};
</script>
