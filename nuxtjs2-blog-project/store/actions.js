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
  async authenticateUser({ commit, dispatch }, authData) {
    const url = authData.isLogin ? process.env.loginUrl : process.env.signupUrl;
    try {
      const data = {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      };
      const response = await this.$axios.$post(url, data);
      commit("setToken", response.idToken);
      localStorage.setItem("token", response.idToken);
      const expirationTime = response.expiresIn * 1000;
      localStorage.setItem(
        "tokenExpiration",
        new Date().getTime() + expirationTime
      );
      dispatch("setLogoutTimer", expirationTime);
      return !!response.idToken;
    } catch (e) {
      if (this.isLogin) {
        throw new Error("Login to service throws an error");
      }
      throw new Error("Signup to service throws en error");
    }
  },
  setLogoutTimer({ commit }, duration) {
    setTimeout(() => {
      commit("clearToken");
    }, duration);
  },
  initAuth({ commit, dispatch }) {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("tokenExpiration");
    if (new Date().getTime() > +expirationDate || !token) {
      return;
    }
    dispatch("setLogoutTimer", +expirationDate - new Date().getTime());
    commit("setToken", token);
  }
};
