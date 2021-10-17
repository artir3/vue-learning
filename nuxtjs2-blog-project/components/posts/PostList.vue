<template>
  <section class="posts-list">
    <post-preview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :preview-text="post.previewText"
      :title="post.title"
      :thumbnail="post.thumbnail"
      :is-admin="isAdmin"
    >
    </post-preview>
  </section>
</template>

<script lang="ts">
import PostPreview from "@/components/posts/PostPreview.vue";

import Vue from "vue";
export default Vue.extend({
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  components: { PostPreview },
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
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
