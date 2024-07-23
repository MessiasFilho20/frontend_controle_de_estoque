<template>
  <div class="flex w-full justify-center items-center my-1">
    <div class=" overflow-x-auto whitespace-nowrap custom-scrollbar ">
      <div class="inline-block px-2 " v-for=" cat  in use_category.categories ">
      <div  @click="clicCategory(cat.id, cat.description)" class="min-w-[10rem] mb-3 cursor-pointer flex items-center justify-between border rounded-sm" >
        <div class="pl-1 flex justify-center bg-[var(--orange)]  w-full  rounded-sm  active:scale-95"> <span class="font-semibold"> {{ cat.name }} </span> </div>
       
      </div>
    </div>
    </div>
    
    </div>
</template>

<script lang="ts" setup>
const use_category = useCategory()
const use_modal = useModal()
const use_mellury = useMetallurgy()

const createItems = () =>{
  use_modal.createItem = true 
}

const clicCategory = async (id: number, descr: string) =>{
  
  use_modal.idCategory = id 
  use_modal.name_category = descr

  await use_mellury.showAllMelorryId(id)
}



</script>

<style >



</style>