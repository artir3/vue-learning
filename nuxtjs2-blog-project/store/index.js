import { Store } from "vuex";

const createStore = () => {
  return new Store({
    state: {
      loadedPosts: []
    },
    getters: {
      getPosts(state) {
        return state.loadedPosts;
      },
      getPost: state => id => {
        return state.loadedPosts.find(p => p.id == id);
      }
    },
    mutations: {
      setAllPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        const newPost = {
          ...post,
          id: state.loadedPosts.length + 1,
          updateDate: new Date()
        };
        state.loadedPosts.push(newPost);
      },
      updatePost(state, post) {
        const updatedPost = {
          ...post,
          updateDate: new Date()
        };
        const index = state.loadedPosts.findIndex(p => p.id == post.id);
        state.loadedPosts[index] = updatedPost;
      }
    },
    actions: {
      setPosts(context, posts) {
        context.commit("setAllPosts", posts);
      },
      savePost(context, post) {
        context.commit(post.id ? "updatePost" : "addPost", post);
      },
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(dummyPosts);
          }, 2000);
        })
          .then(data => {
            vuexContext.commit("setAllPosts", data);
          })
          .catch(e => {
            context.error(new Error());
          });
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
    updateDate: new Date(),
    thumbnail:
      "https://animemotivation.com/wp-content/uploads/2018/07/Akame-from-akame-ga-kill-smiling.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo purus, lacinia ut ornare in, elementum a mauris. Vivamus ut erat nisi. Pellentesque porttitor orci quis justo mollis, ut vehicula diam mattis. Ut a pellentesque lacus. Ut lobortis erat varius, iaculis erat sed, aliquam mi. Maecenas dictum vestibulum metus, rutrum accumsan libero ultricies vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate ante sed enim consectetur, quis fringilla justo pellentesque. Nam vestibulum euismod suscipit."
  },
  {
    id: 2,
    title: "Start journey",
    author: "Neko Mleko",
    updateDate: new Date(),
    thumbnail:
      "https://animemotivation.com/wp-content/uploads/2018/07/Akame-from-akame-ga-kill-smiling.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo purus, lacinia ut ornare in, elementum a mauris. Vivamus ut erat nisi. Pellentesque porttitor orci quis justo mollis, ut vehicula diam mattis. Ut a pellentesque lacus. Ut lobortis erat varius, iaculis erat sed, aliquam mi. Maecenas dictum vestibulum metus, rutrum accumsan libero ultricies vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate ante sed enim consectetur, quis fringilla justo pellentesque. Nam vestibulum euismod suscipit."
  },
  {
    id: 3,
    title: "Hard times",
    author: "Neko Mleko",
    updateDate: new Date(),
    thumbnail:
      "https://animemotivation.com/wp-content/uploads/2018/07/Akame-from-akame-ga-kill-smiling.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo purus, lacinia ut ornare in, elementum a mauris. Vivamus ut erat nisi. Pellentesque porttitor orci quis justo mollis, ut vehicula diam mattis. Ut a pellentesque lacus. Ut lobortis erat varius, iaculis erat sed, aliquam mi. Maecenas dictum vestibulum metus, rutrum accumsan libero ultricies vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate ante sed enim consectetur, quis fringilla justo pellentesque. Nam vestibulum euismod suscipit."
  },
  {
    id: 4,
    title: "The end",
    author: "Neko Mleko",
    updateDate: new Date(),
    thumbnail:
      "https://animemotivation.com/wp-content/uploads/2018/07/Akame-from-akame-ga-kill-smiling.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo purus, lacinia ut ornare in, elementum a mauris. Vivamus ut erat nisi. Pellentesque porttitor orci quis justo mollis, ut vehicula diam mattis. Ut a pellentesque lacus. Ut lobortis erat varius, iaculis erat sed, aliquam mi. Maecenas dictum vestibulum metus, rutrum accumsan libero ultricies vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate ante sed enim consectetur, quis fringilla justo pellentesque. Nam vestibulum euismod suscipit."
  }
];
