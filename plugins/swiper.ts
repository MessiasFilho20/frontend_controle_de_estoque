import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const options: SwiperModuleOptions = {
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['navigation', 'pagination', 'scrollbar', 'a11y']
  };

 
});