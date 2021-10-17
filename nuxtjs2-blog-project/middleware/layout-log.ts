import { Context } from "@nuxt/types";

export default ({ route }: Context) => {
  console.log("Layout log: " + route.fullPath);

  return {};
};
