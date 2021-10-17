import { Store } from "vuex";

const createStore = () => {
  return new Store({
    state: {
      loadedPosts: dummyPosts
    },
    getters: {
      getPosts(state) {
        return state.loadedPosts;
      }
    },
    mutations: {
      addAllPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      setPosts(vuexContext, posts) {
        vuexContext.commit("addAllPosts", posts);
      }
    }
  });
};
export default createStore;

const dummyPosts = [
  {
    id: 1,
    title: "New beginning",
    author: "Neko Mleko",
    thumbnail:
      "https://lh3.googleusercontent.com/proxy/YLt0DR0-rNWQnVaa7sFefrjQ6df-SkM3FyjEMbjAUlGJJag_GmwEwJC5OcZAW_yZ8WKmw6JbmWYybkViJWeT_8VGM6aP-CLJJEen-8y0M5diINvQAeA-l9ELl_srNU9LiNWHs_cpFP21DeY_32IHR0OZFlFCT0j4K1reB5RFVLFW89h1Xv_Q77o-z8bJY_VTnuGT6gBUuyjm",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo purus, lacinia ut ornare in, elementum a mauris. Vivamus ut erat nisi. Pellentesque porttitor orci quis justo mollis, ut vehicula diam mattis. Ut a pellentesque lacus. Ut lobortis erat varius, iaculis erat sed, aliquam mi. Maecenas dictum vestibulum metus, rutrum accumsan libero ultricies vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate ante sed enim consectetur, quis fringilla justo pellentesque. Nam vestibulum euismod suscipit."
  },
  {
    id: 2,
    title: "Start journey",
    author: "Neko Mleko",
    thumbnail:
      "https://lh3.googleusercontent.com/proxy/YLt0DR0-rNWQnVaa7sFefrjQ6df-SkM3FyjEMbjAUlGJJag_GmwEwJC5OcZAW_yZ8WKmw6JbmWYybkViJWeT_8VGM6aP-CLJJEen-8y0M5diINvQAeA-l9ELl_srNU9LiNWHs_cpFP21DeY_32IHR0OZFlFCT0j4K1reB5RFVLFW89h1Xv_Q77o-z8bJY_VTnuGT6gBUuyjm",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo purus, lacinia ut ornare in, elementum a mauris. Vivamus ut erat nisi. Pellentesque porttitor orci quis justo mollis, ut vehicula diam mattis. Ut a pellentesque lacus. Ut lobortis erat varius, iaculis erat sed, aliquam mi. Maecenas dictum vestibulum metus, rutrum accumsan libero ultricies vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate ante sed enim consectetur, quis fringilla justo pellentesque. Nam vestibulum euismod suscipit."
  },
  {
    id: 3,
    title: "Hard times",
    author: "Neko Mleko",
    thumbnail:
      "https://lh3.googleusercontent.com/proxy/YLt0DR0-rNWQnVaa7sFefrjQ6df-SkM3FyjEMbjAUlGJJag_GmwEwJC5OcZAW_yZ8WKmw6JbmWYybkViJWeT_8VGM6aP-CLJJEen-8y0M5diINvQAeA-l9ELl_srNU9LiNWHs_cpFP21DeY_32IHR0OZFlFCT0j4K1reB5RFVLFW89h1Xv_Q77o-z8bJY_VTnuGT6gBUuyjm",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo purus, lacinia ut ornare in, elementum a mauris. Vivamus ut erat nisi. Pellentesque porttitor orci quis justo mollis, ut vehicula diam mattis. Ut a pellentesque lacus. Ut lobortis erat varius, iaculis erat sed, aliquam mi. Maecenas dictum vestibulum metus, rutrum accumsan libero ultricies vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate ante sed enim consectetur, quis fringilla justo pellentesque. Nam vestibulum euismod suscipit."
  },
  {
    id: 4,
    title: "The end",
    author: "Neko Mleko",
    thumbnail:
      "https://lh3.googleusercontent.com/proxy/YLt0DR0-rNWQnVaa7sFefrjQ6df-SkM3FyjEMbjAUlGJJag_GmwEwJC5OcZAW_yZ8WKmw6JbmWYybkViJWeT_8VGM6aP-CLJJEen-8y0M5diINvQAeA-l9ELl_srNU9LiNWHs_cpFP21DeY_32IHR0OZFlFCT0j4K1reB5RFVLFW89h1Xv_Q77o-z8bJY_VTnuGT6gBUuyjm",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo purus, lacinia ut ornare in, elementum a mauris. Vivamus ut erat nisi. Pellentesque porttitor orci quis justo mollis, ut vehicula diam mattis. Ut a pellentesque lacus. Ut lobortis erat varius, iaculis erat sed, aliquam mi. Maecenas dictum vestibulum metus, rutrum accumsan libero ultricies vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate ante sed enim consectetur, quis fringilla justo pellentesque. Nam vestibulum euismod suscipit."
  }
];
