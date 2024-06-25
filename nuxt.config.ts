// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/fonts", "@vueuse/nuxt", "@nuxt/image", "nuxt-lucide-icons"],
  // Подключение модуля шрифтов
  fonts: {
    // Семейства
    families: [
      { name: "roboto", provider: "google" },
      { name: "montserrat", provider: "google" },
    ],
    // Провайдер
    google: true,
    // Начертания
    defaults: {
      weights: [300, 400, 500, 600],
    },
  },
  image: {
    inject: true,
  },
  // Подключение глобального файла стилей
  css: ["~/assets/scss/global/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          //   Подключение фрагментов стилей
          additionalData: `@use "~/assets/scss/global/_vars.scss" as *;
                           @use "~/assets/scss/global/_ui.scss" as *;`,
        },
      },
    },
  },
});
