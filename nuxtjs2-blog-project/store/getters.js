export default {
  getPosts(state) {
    return state.posts;
  },
  isAuthenticated(state) {
    console.log("getters - state.token", state.token);
    return !!state.token;
  }
};
