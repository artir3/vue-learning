<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <post-form @save-post="submit" @cancel="redirect" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  layout: "admin",
  methods: {
    async submit(postData: any) {
      this.$store.dispatch("savePost", postData).then(() => {
        this.redirect();
      });
    },
    redirect() {
      this.$router.push("/admin");
    }
  }
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
