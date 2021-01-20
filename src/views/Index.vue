<template>
  <div class="index">
    <h2>Index page</h2>

    <v-card color="#F2F2F2" flat class="mt-4">
      <v-row>
        <v-col cols="10">
          <v-file-input
            type="file"
            label="File selected"
            accept="application/JSON"
            v-model="fileName"
            class="ml-2"
          />
        </v-col>
        <v-col cols="2">
          <v-btn class="mt-2 mr-1" @click="processData"
            >Upload <v-icon>mdi-file-upload-outline</v-icon></v-btn
          >
        </v-col>
      </v-row>
    </v-card>
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
    processData() {
      if (this.fileName) {
        const reader = new FileReader();

        reader.readAsText(this.fileName);

        reader.onload = e => {
          const selectedFile = e.target.result;
          try {
            const usersData = JSON.parse(selectedFile);
            this._updateUsers(usersData);
          } catch (e) {
            alert("Unsupported file type or corrupt file");
            this.fileName = null;
          }
        };
      } else {
        alert("Cannot upload an empty file");
      }
    },
    _updateUsers(usersData) {
      if (this.checkFile(usersData)) {
        this.updateUsers(usersData.users);
        alert("File uploaded");
      } else {
        alert("JSON file is not in the correct format");
      }
      this.fileName = null;
    },
    checkFile(usersData) {
      if ("users" in usersData) {
        if (
          usersData.users.every(function(user) {
            var propertiesToTest = ["github_url", "name", "nickName"];
            return propertiesToTest.every(function(x) {
              return x in user;
            });
          })
        ) {
          return true;
        }
      }
      return false;
    }
  }
};
</script>
