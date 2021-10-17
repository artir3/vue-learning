<template>
  <form @submit.prevent="onSave">
    <app-control-input v-model="editedPost.author">
      Author name
    </app-control-input>
    <app-control-input v-model="editedPost.title">
      Post title
    </app-control-input>
    <app-control-input v-model="editedPost.thumbnail">
      Thumbnail link
    </app-control-input>
    <app-control-input controlType="textarea" v-model="editedPost.previewText">
      previewText
    </app-control-input>
    <app-control-input controlType="textarea" v-model="editedPost.content">
      Content
    </app-control-input>
    <app-button type="submit">Save</app-button>
    <app-button
      type="button"
      style="margin-left: 10px"
      btnStyle="cancel"
      @click="onCancel"
    >
      Cancel
    </app-button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            content: "",
            thumbnail: "",
            previewText: ""
          }
    };
  },
  methods: {
    onSave() {
      // save
      this.$emit("save-post", { ...this.editedPost, updateDate: new Date() });
    },
    onCancel() {
      this.$emit("cancel");
    }
  }
});
</script>
