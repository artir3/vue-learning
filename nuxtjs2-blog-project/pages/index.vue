<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <post-preview
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :previewText="post.previewText"
        :title="post.title"
        :thumbnail="post.thumbnail"
      >
      </post-preview>
    </section>
  </div>
</template>

<script lang="ts">
import PostPreview from "~/components/posts/PostPreview.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    PostPreview
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "New beginning",
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/YLt0DR0-rNWQnVaa7sFefrjQ6df-SkM3FyjEMbjAUlGJJag_GmwEwJC5OcZAW_yZ8WKmw6JbmWYybkViJWeT_8VGM6aP-CLJJEen-8y0M5diINvQAeA-l9ELl_srNU9LiNWHs_cpFP21DeY_32IHR0OZFlFCT0j4K1reB5RFVLFW89h1Xv_Q77o-z8bJY_VTnuGT6gBUuyjm",
          previewText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo purus, lacinia ut ornare in, elementum a mauris. Vivamus ut erat nisi. Pellentesque porttitor orci quis justo mollis, ut vehicula diam mattis. Ut a pellentesque lacus. Ut lobortis erat varius, iaculis erat sed, aliquam mi. Maecenas dictum vestibulum metus, rutrum accumsan libero ultricies vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate ante sed enim consectetur, quis fringilla justo pellentesque. Nam vestibulum euismod suscipit."
        },
        {
          id: 2,
          title: "Start journey",
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/YLt0DR0-rNWQnVaa7sFefrjQ6df-SkM3FyjEMbjAUlGJJag_GmwEwJC5OcZAW_yZ8WKmw6JbmWYybkViJWeT_8VGM6aP-CLJJEen-8y0M5diINvQAeA-l9ELl_srNU9LiNWHs_cpFP21DeY_32IHR0OZFlFCT0j4K1reB5RFVLFW89h1Xv_Q77o-z8bJY_VTnuGT6gBUuyjm",
          previewText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo purus, lacinia ut ornare in, elementum a mauris. Vivamus ut erat nisi. Pellentesque porttitor orci quis justo mollis, ut vehicula diam mattis. Ut a pellentesque lacus. Ut lobortis erat varius, iaculis erat sed, aliquam mi. Maecenas dictum vestibulum metus, rutrum accumsan libero ultricies vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate ante sed enim consectetur, quis fringilla justo pellentesque. Nam vestibulum euismod suscipit."
        },
        {
          id: 3,
          title: "Hard times",
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/YLt0DR0-rNWQnVaa7sFefrjQ6df-SkM3FyjEMbjAUlGJJag_GmwEwJC5OcZAW_yZ8WKmw6JbmWYybkViJWeT_8VGM6aP-CLJJEen-8y0M5diINvQAeA-l9ELl_srNU9LiNWHs_cpFP21DeY_32IHR0OZFlFCT0j4K1reB5RFVLFW89h1Xv_Q77o-z8bJY_VTnuGT6gBUuyjm",
          previewText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo purus, lacinia ut ornare in, elementum a mauris. Vivamus ut erat nisi. Pellentesque porttitor orci quis justo mollis, ut vehicula diam mattis. Ut a pellentesque lacus. Ut lobortis erat varius, iaculis erat sed, aliquam mi. Maecenas dictum vestibulum metus, rutrum accumsan libero ultricies vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate ante sed enim consectetur, quis fringilla justo pellentesque. Nam vestibulum euismod suscipit."
        },
        {
          id: 4,
          title: "The end",
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/YLt0DR0-rNWQnVaa7sFefrjQ6df-SkM3FyjEMbjAUlGJJag_GmwEwJC5OcZAW_yZ8WKmw6JbmWYybkViJWeT_8VGM6aP-CLJJEen-8y0M5diINvQAeA-l9ELl_srNU9LiNWHs_cpFP21DeY_32IHR0OZFlFCT0j4K1reB5RFVLFW89h1Xv_Q77o-z8bJY_VTnuGT6gBUuyjm",
          previewText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo purus, lacinia ut ornare in, elementum a mauris. Vivamus ut erat nisi. Pellentesque porttitor orci quis justo mollis, ut vehicula diam mattis. Ut a pellentesque lacus. Ut lobortis erat varius, iaculis erat sed, aliquam mi. Maecenas dictum vestibulum metus, rutrum accumsan libero ultricies vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate ante sed enim consectetur, quis fringilla justo pellentesque. Nam vestibulum euismod suscipit."
        }
      ]
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
</style>
