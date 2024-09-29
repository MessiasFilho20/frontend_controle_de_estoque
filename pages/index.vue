<template>
  <div class="w-full h-full flex justify-center flex-col p-1 ">
    <div class="backdrop-blur-md bg-white/20 rounded-xl shadow-2xl">
      <Searche/>
      <div class="  ">
       <div class="px-2">
         <Categorys/> 
        </div>
       
       <div class="w-full overflow-hidden">
         <div >  
          <TableItems/> 
        </div>
       </div>
  
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
<!-- teste  -->
<style scoped> 

</style>