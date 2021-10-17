export default {
  setPosts(context, posts) {
    context.commit("setAllPosts", posts);
  },
  async savePost({ commit, state }, post) {
    const data = await this.$axios.$post(
      `/posts.json?auth=${state.token}`,
      post
    );
    commit("addPost", { ...post, id: data.name });
    return data;
  },
  async editPost({ commit, state }, post) {
    const id = post.id;
    console.log(state.token);
    const data = await this.$axios.$put(
      `/posts/${id}.json?auth=${state.token}`,
      {
        ...post,
        id: undefined
      }
    );
    commit("updatePost", post);
    return data;
  },
  async nuxtServerInit({ commit }) {
    if (process.server) {
      const data = await this.$axios.$get(`/posts.json`);
      const posts = [];
      for (const key in data) {
        posts.push({ ...data[key], id: key });
      }
      commit("setAllPosts", posts);
    }
  },
  async authenticateUser({ commit }, authData) {
    const url = authData.isLogin ? process.env.loginUrl : process.env.signupUrl;
    try {
      const data = {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      };
      const response = await this.$axios.$post(url, data);
      commit("setToken", response.idToken);
      return !!response.idToken;
    } catch (e) {
      if (this.isLogin) {
        throw new Error("Login to service throws an error");
      }
      throw new Error("Signup to service throws en error");
    }
  }
};
