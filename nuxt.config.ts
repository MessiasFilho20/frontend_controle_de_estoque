// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt",'@vueuse/nuxt','@pinia/nuxt', 'nuxt-swiper'],
  css: ['~/assets/css/main.css'], 
  build:{
    transpile:['vue-sonner']
  }, 
  
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  runtimeConfig:{
    // public: {backnend: 'http://192.168.1.10:3001/'}
    public: {backnend: 'https://back.ifsolucoes.site/'}

  }, 
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  postcss: {
    plugins: {
      tailwindcss: {

      },
      autoprefixer: {},
    },
  },

  vite: {
    server: {
      hmr: {
        overlay: false
      }
    }
  }


})