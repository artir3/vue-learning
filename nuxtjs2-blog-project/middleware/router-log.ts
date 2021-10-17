import { Context } from "@nuxt/types";

export default function({ route }: Context) {
  console.log("Global router log: " + route.fullPath);

  return {};
}
