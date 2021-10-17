<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button @click="$router.push('/admin/new-post')">
        Create Post
      </app-button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <post-list :posts="posts" isAdmin />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "admin",
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    }
  },
  middleware: ["auth"]
});
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
