// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'assets/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: './tailwind.config.js',
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/content'
  ],
  content: {
    // Options
  }

});

