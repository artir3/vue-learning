import { Context } from "@nuxt/types";

export default ({ store }: Context) => {
  if (process.client) {
    store.dispatch("initAuth");
  }
};
