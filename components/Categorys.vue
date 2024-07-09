<template>
  <div class="flex w-full justify-center items-center my-1">
      <Swiper class="w-full"
      :spaceBetween="10"
      :slidesPerView="3"
      :cssMode="true"
      :mousewheel="true"
      :keyboard="true"
      :freeMode="true"
      :pagination="{
      clickable: true,
    }"
  >
    <swiper-slide class=" flex justify-center " v-for="slide in useCategory().categories" :key="slide.id">
      <div @click="clicCategory(slide.id)" class=" active:scale-95  p-1 border shadow-2xl rounded-md w-full px-2 whitespace-nowrap ">
        <span class="">{{ slide.name}}</span> 
      </div>
     
    </swiper-slide>
  </Swiper>
    </div>
</template>

<script lang="ts" setup>
const use_category = useCategory()


const emit = defineEmits<{
    (e: 'selectCategory', categoryID: number ): void
  }>()

const clicCategory = (id: number) =>{
  emit('selectCategory', id)
}
</script>

<style>

</style>