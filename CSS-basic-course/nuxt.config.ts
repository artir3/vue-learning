import { defineNuxtConfig } from "nuxt3";
import { NuxtConfig } from "@nuxt/kit";

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
};

export default defineNuxtConfig(nuxtConfig);
