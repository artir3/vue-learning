import { Context } from "@nuxt/types";

export default function({ route }: Context) {
  console.log("Page log: " + route.fullPath);

  return {};
}
