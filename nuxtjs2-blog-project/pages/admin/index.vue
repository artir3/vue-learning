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
import PostList from "@/components/posts/PostList.vue";
import AppButton from "@/components/UI/AppButton.vue";

export default Vue.extend({
  components: { AppButton, PostList },
  layout: "admin",
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(context.store.getters.getPosts);
      }, 2000);
    })
      .then(data => {
        return { posts: data };
      })
      .catch(e => {
        context.error(new Error());
      });
  }
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
