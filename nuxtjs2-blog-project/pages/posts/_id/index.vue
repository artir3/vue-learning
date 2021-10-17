<template>
  <div class="single-post-page">
    <section class="post">
      <div
        class="post-thumbnail"
        :style="{ backgroundImage: 'url(' + post.thumbnail + ')' }"
      ></div>
      <h1 class="post-title">{{ post.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ post.updateDate }}</div>
        <div class="post-detail">Written by {{ post.author }}</div>
      </div>
      <p class="post-content">{{ post.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know about you think about the post, send a
        <a :href="'mailto:' + email">mait to</a>
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      email: "email@e.e"
    };
  },
  async asyncData(context) {
    const id = context.params.id;
    const response = await axios.get(
      `${context.$config.dbUrl}/posts/${id}.json`
    );
    if (response.status == 200) {
      return {
        post: response.data
      };
    } else {
      throw new Error(`Receiving post with id ${id} throws an error`);
    }
  }
});
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-thumbnail {
  width: 100%;
  height: 400px;
  padding: 1em;
  margin-bottom: 10px;
  background-position: center;
  background-size: cover;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
