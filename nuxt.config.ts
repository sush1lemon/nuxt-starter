// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  modules: ["@nuxtjs/tailwindcss"],
  typescript: {
    strict: true,
  },
  app: {
    head: {
      script: [
        {
          src: "/_nuxt/assets/preline/dist/preline.js",
          body: true,
          defer: true,
        },
      ],
    },
  },
});
