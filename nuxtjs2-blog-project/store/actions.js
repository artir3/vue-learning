export default {
  setPosts(context, posts) {
    context.commit("setAllPosts", posts);
  },
  async savePost({ commit }, post) {
    const data = await this.$axios.$post(`/posts.json`, post);
    commit("addPost", { ...post, id: data.name });
    return data;
  },
  async editPost({ commit }, post) {
    const id = post.id;
    const data = await this.$axios.$put(`/posts/${id}.json`, {
      ...post,
      id: undefined
    });
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
  }
};
