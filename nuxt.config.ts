// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  hooks: {
    'prerender:routes' ({ routes }) {
      routes.clear() // Do not generate any routes (except the defaults)
    }
  },
})
