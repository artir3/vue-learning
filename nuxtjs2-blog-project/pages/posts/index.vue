<template>
  <div class="posts-page">
    <post-list :posts="posts" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    }
  }
});
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
