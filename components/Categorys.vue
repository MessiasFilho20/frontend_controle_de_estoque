<template>
  <div class="flex w-full justify-center items-center my-1">
      <Swiper class="w-full"
      :spaceBetween="10"
      :slidesPerView="2"
      :cssMode="true"
      :mousewheel="true"
      :keyboard="true"
      :freeMode="true"
      :width="400" 
      :pagination="{clickable: true,}"
      
  >
    <swiper-slide class=" flex justify-center w-[200px] " v-for="slide in useCategory().categories" :key="slide.id">
      <div @click="clicCategory(slide.id, slide.name)" class=" active:scale-95  p-1 border shadow-2xl rounded-md w-full px-2 whitespace-nowrap ">
        <span class="">{{ slide.name}}</span> 
      </div>
     
    </swiper-slide>
  </Swiper>
    </div>
</template>

<script lang="ts" setup>
const use_category = useCategory()


// const emit = defineEmits<{
//     (e: 'selectCategory', categoryID: Number, ): void, 
//     (e: 'descriptionCategory', desc: String, ): void, 
//   }>()

const clicCategory = (id: number, descr: string) =>{
  // emit('selectCategory', id)
  // emit('descriptionCategory', descr)
}

onMounted( async () =>{
  await use_category.getAllCategoryes()
})

</script>

<style>

</style>