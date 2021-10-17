<template>
  <div class="admin-post-page">
    <section class="update-form">
      <post-form :post="loadedPost" />
    </section>
  </div>
</template>

<script lang="ts">
import PostForm from "@/components/admin/PostForm.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    PostForm
  },
  computed: {
    loadedPost() {
      const id = this.$route.params.postId;
      return this.$store.getters.getPost(id);
    }
  },
  layout: "admin"
});
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
