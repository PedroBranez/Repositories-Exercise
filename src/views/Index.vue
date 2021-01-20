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
          <v-btn class="mt-2 mr-1" @click="_updateUsers"
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
    }
  }
};
</script>
