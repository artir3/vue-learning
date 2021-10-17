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
  data() {
    return {
      loadedPost: {
        author: "Neko mleko",
        title: "After mach",
        content: "Next lorem ipsum text. Or not....",
        thumbnail:
          "https://assets3.thrillist.com/v1/image/2932365/1200x630/flatten;crop_down;jpeg_quality=70"
      }
    };
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
