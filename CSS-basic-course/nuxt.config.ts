import { defineNuxtConfig } from "nuxt3";
import { NuxtConfig } from "@nuxt/kit";
import { resolve } from "pathe";

const nuxtConfig: NuxtConfig = {
  head: {
    meta: [
      { charset: "UTF-8" },
      { name: "viewport", content: "width=1300, initial-scale=1.0" },
    ],
    link: [
      {
        href: "https://fonts.googleapis.com/css?family=Anton",
        rel: "stylesheet",
      },
      {
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,700",
        rel: "stylesheet",
      },
    ],
  },
  buildDir: "build",
  alias: {
    images: resolve(__dirname, "./assets/images"),
  },
};

export default defineNuxtConfig(nuxtConfig);
