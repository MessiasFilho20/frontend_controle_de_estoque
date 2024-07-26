<template>
  <div class="w-full h-full flex justify-center flex-col">
    <Searche/>
   <div class="px-2">
     <Categorys/> 
    </div>
   
   <div class="w-full overflow-hidden">
     <div >  
      <TableItems/> 
    </div>
   </div>
  </div>
</template>

<script lang="ts" setup>
const use_modal = useModal()

definePageMeta({
  name: 'index'
})

onMounted( async () =>{
  await useCategory().getAllCategoryes()
})

</script>

<style scoped> 

</style>