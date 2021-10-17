<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <nuxt-link
        v-for="id in 4"
        :key="id"
        :to="'/posts/' + id"
        class="post-preview"
      >
        <article>
          <div
            class="post-thumbnail"
            :style="'background-image: url(' + link + ');'"
          ></div>
          <div class="post-content">
            <h1>Post Titlle no {{ id }}</h1>
            <p>Preview text</p>
          </div>
        </article>
      </nuxt-link>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      link:
        "https://lh3.googleusercontent.com/proxy/YLt0DR0-rNWQnVaa7sFefrjQ6df-SkM3FyjEMbjAUlGJJag_GmwEwJC5OcZAW_yZ8WKmw6JbmWYybkViJWeT_8VGM6aP-CLJJEen-8y0M5diINvQAeA-l9ELl_srNU9LiNWHs_cpFP21DeY_32IHR0OZFlFCT0j4K1reB5RFVLFW89h1Xv_Q77o-z8bJY_VTnuGT6gBUuyjm"
    };
  }
});
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
