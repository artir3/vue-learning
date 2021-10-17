<template>
  <div class="admin-post-page">
    <section class="update-form">
      <post-form :post="loadedPost" @cancel="redirect" @save-post="submit" />
    </section>
  </div>
</template>

<script lang="ts">
import PostForm from "@/components/admin/PostForm.vue";
import axios from "axios";
import Vue from "vue";
export default Vue.extend({
  components: {
    PostForm
  },
  async asyncData(context) {
    const id = context.params.postId;
    const response = await axios.get(
      `${context.$config.dbUrl}/posts/${id}.json`
    );
    if (response.status == 200) {
      return {
        loadedPost: { ...(response.data as {}), id }
      };
    } else {
      throw new Error(`Receiving post with id ${id} throws an error`);
    }
  },
  methods: {
    async submit(putData: any) {
      this.$store.dispatch("editPost", putData).then(() => this.redirect());
    },
    redirect() {
      this.$router.push("/admin");
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
