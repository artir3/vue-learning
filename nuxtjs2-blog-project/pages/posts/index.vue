<template>
  <div class="posts-page">
    <post-list :posts="posts" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostList from "@/components/posts/PostList.vue";

export default Vue.extend({
  components: { PostList },
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
.posts-page {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
