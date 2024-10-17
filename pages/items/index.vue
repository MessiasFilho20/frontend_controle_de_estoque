<template>
    <div class=" w-full h-full flex justify-center flex-col p-2">
      <div class="backdrop-blur-md bg-white/5 rounded-xl shadow-2xl">
        <Searche/>
       <div class="px-2">
         <CategorysAdmin/> 
        </div>
       
       <div class="w-full overflow-hidden">
         <div class="table-scrollbar" >  
          <TableItems/> 
        </div>
       </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  const use_modal = useModal()

  definePageMeta({
    name: 'itemspage'
  })
    
  onMounted( async () =>{
    use_modal.menuadmin = false
    
    await useCategory().getAllCategoryes()
  })
  
  </script>
  
  <style scoped> 

  
  </style>