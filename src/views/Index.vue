<template>
  <div class="index">
    <h1>This is the index page</h1>
    <v-file-input type="file" label="File selected" @change="onFileSelected" />
    <v-btn @click="_updateUsers">Upload</v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Index",
  data() {
    return {
      selectedFile: null
    };
  },
  methods: {
    ...mapActions(["updateUsers"]),
    onFileSelected(file) {
      const reader = new FileReader();

      reader.onload = e => {
        this.selectedFile = e.target.result;
      };

      reader.readAsText(file);
    },
    _updateUsers() {
      const usersData = JSON.parse(this.selectedFile);
      this.updateUsers(usersData.users);
    }
  }
};
</script>
