import axios from "axios";

export default {
  setPosts(context, posts) {
    context.commit("setAllPosts", posts);
  },
  async savePost(context, post) {
    const response = await axios.post(
      `${process.env.NUXT_ENV_DB_URL}/posts.json`,
      post
    );
    if (response.status == 200) {
      context.commit("addPost", { ...post, id: response.data.name });
      return response;
    } else {
      throw new Error("Saving new post throws an error");
    }
  },
  async editPost(context, post) {
    const id = post.id;
    const response = await axios.put(
      `${process.env.NUXT_ENV_DB_URL}/posts/${id}.json`,
      post
    );
    if (response.status == 200) {
      context.commit("updatePost", post);
      return response;
    } else {
      throw new Error("Editing post with id " + id + " throws an error");
    }
  },
  async nuxtServerInit(vuexContext) {
    if (process.server) {
      const response = await axios.get(
        `${process.env.NUXT_ENV_DB_URL}/posts.json`
      );
      if (response.status == 200) {
        const posts = [];
        for (const key in response.data) {
          posts.push({ ...response.data[key], id: key });
        }
        vuexContext.commit("setAllPosts", posts);
      } else {
        throw new Error("Receiving posts throws and error");
      }
    }
  }
};
