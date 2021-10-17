import Cookie from "js-cookie";

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
      localStorage.setItem("token", response.idToken);
      const expirationTime = Number.parseInt(response.expiresIn) * 1000;
      const expirationDateTime = new Date().getTime() + expirationTime;
      localStorage.setItem("tokenExpiration", expirationDateTime);
      Cookie.set("jwt", response.idToken);
      Cookie.set("expirationDateTime", expirationDateTime);
      return !!response.idToken;
    } catch (e) {
      if (this.isLogin) {
        throw new Error("Login to service throws an error");
      }
      throw new Error("Signup to service throws en error");
    }
  },
  initAuth({ commit }, req) {
    let token;
    let expirationDate;
    if (req) {
      const cookie = req.headers.cookie;
      if (!cookie) {
        return;
      }
      const cookies = cookie.split(";");
      const jwtCookie = cookies.find(c => c.trim().startsWith("jwt="));
      if (!jwtCookie) {
        return;
      }
      token = jwtCookie.split("=")[1];
      expirationDate = cookies
        .find(c => c.trim().startsWith("expirationDateTime="))
        .split("=")[1];
    } else {
      token = localStorage.getItem("token");
      expirationDate = localStorage.getItem("tokenExpiration");
    }
    if (new Date().getTime() > +expirationDate || !token) {
      commit("clearToken");
      return;
    }
    commit("setToken", token);
  },
  logout({ commit }) {
    commit("clearToken");
    Cookie.remove("jwt");
    Cookie.remove("expirationDateTime");
    if (process.client) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    }
  }
};
