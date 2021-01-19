<template>
  <div class="index">
    <h1>This is the index page</h1>
    <v-file-input
      accept="application/JSON"
      label="File selected"
      @change="onFileSelected"
    ></v-file-input>
  </div>
</template>

<script>
export default {
  name: "Index",
  methods: {
    onFileSelected(event) {
      console.log(event);
    }
  }
};
</script>
