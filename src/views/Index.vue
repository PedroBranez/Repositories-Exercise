<template>
  <div class="index">
    <h1>This is the index page</h1>
    <v-file-input
      type="file"
      label="File selected"
      accept="application/JSON"
      v-model="fileName"
    />
    <v-btn @click="_updateUsers">Upload</v-btn>
    <v-btn @click="redirectToView('repositories')">
      <span class="mr-2">Repositories</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Index",
  data() {
    return {
      fileName: null
    };
  },
  methods: {
    ...mapActions(["updateUsers"]),
    _updateUsers() {
      if (this.fileName) {
        const reader = new FileReader();

        reader.readAsText(this.fileName);

        reader.onload = e => {
          const selectedFile = e.target.result;
          const usersData = JSON.parse(selectedFile);
          this.updateUsers(usersData.users);
          alert("File uploaded");
          this.fileName = null;
        };
      } else {
        alert("Cannot upload an empty file");
      }
    },
    redirectToView(route) {
      this.$router.push(`/${route}`);
    }
  }
};
</script>
