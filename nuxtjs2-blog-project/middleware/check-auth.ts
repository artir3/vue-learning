import { Context } from "@nuxt/types";

export default ({ store, req }: Context) => {
  store.dispatch("initAuth", req);
};
