import { Context } from "@nuxt/types";

export default ({ store, redirect }: Context) => {
  if (!store.getters.isAuthenticated) {
    redirect("/admin/auth");
  }
};
