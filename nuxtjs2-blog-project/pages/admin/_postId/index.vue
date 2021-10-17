<template>
  <div class="admin-post-page">
    <section class="update-form">
      <post-form :post="loadedPost" @cancel="redirect" @save-post="submit" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  async asyncData({ params: { postId }, app: { $axios } }) {
    const id = postId;
    const data = await $axios.$get(`/posts/${id}.json`);
    return {
      loadedPost: { ...data, id }
    };
  },
  methods: {
    async submit(putData: any) {
      this.$store.dispatch("editPost", putData).then(() => this.redirect());
    },
    redirect() {
      this.$router.push("/admin");
    }
  },
  layout: "admin",
  middleware: ["check-auth", "auth"]
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
