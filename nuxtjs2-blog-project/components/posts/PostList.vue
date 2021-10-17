<template>
  <section class="posts-list">
    <post-preview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :preview-text="post.previewText"
      :title="post.title"
      :thumbnail="post.thumbnail"
      :is-admin="isAdmin"
    >
    </post-preview>
  </section>
</template>

<script lang="ts">
import PostPreview from "@/components/posts/PostPreview.vue";

import Vue from "vue";
export default Vue.extend({
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  },
  components: { PostPreview }
});
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
