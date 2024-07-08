<template>
  <div class="w-full h-full flex justify-center">
    <div class="flex w-full justify-center items-center mt-1 ">
      <Swiper class="w-full"
      :slidesPerView="2"
      :cssMode="true"
      :mousewheel="true"
      :keyboard="true"
      :freeMode="true"
      :pagination="{
      clickable: true,
    }"
   
  >
    <SwiperSlide class=" w-full space-x-3 flex justify-center " v-for="slide in 10" :key="slide">
      <strong class="bg-slate-500 w-full whitespace-nowrap ">{{ slide + "  asdadasd asdas dasd " }}</strong>
    </SwiperSlide>
  </Swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>



</script>

<style>

</style>