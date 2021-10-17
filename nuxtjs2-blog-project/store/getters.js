export default {
  getPosts(state) {
    return state.posts;
  },
  isAuthenticated(state) {
    return !!state.token;
  }
};
