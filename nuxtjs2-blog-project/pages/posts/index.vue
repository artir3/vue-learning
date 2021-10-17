<template>
  <div class="posts-page">
    <post-list />
  </div>
</template>

<script lang="ts">
import PostList from "@/components/posts/PostList.vue";

import Vue from "vue";
export default Vue.extend({
  components: { PostList }
});
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
