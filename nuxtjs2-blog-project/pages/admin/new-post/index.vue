<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <post-form />
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
  layout: "admin"
});
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
