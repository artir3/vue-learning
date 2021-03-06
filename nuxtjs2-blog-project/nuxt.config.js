export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxtjs2-blog",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
      }
    ]
  },

  // dev: true,
  // debug: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/core-components.js", "~plugins/date-filter.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  env: {
    loginUrl: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.NUXT_ENV_API_KEY}`,
    signupUrl: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.NUXT_ENV_API_KEY}`
  },

  axios: {
    baseURL:
      "https://nuxt-course-cedb7-default-rtdb.europe-west1.firebasedatabase.app/",
    credentials: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {},

  transition: {
    name: "fade",
    mode: "out-in"
  },

  router: {
    // middleware: "router-log"
  }
};
