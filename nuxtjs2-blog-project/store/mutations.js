export default {
  setAllPosts(state, posts) {
    state.posts = posts;
  },
  addPost(state, post) {
    state.posts.push(post);
  },
  updatePost(state, post) {
    const postIndex = state.posts.findIndex(p => p.id === post.id);
    state.posts[postIndex] = post;
  }
};
