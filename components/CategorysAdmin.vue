<template>
  <div class="flex w-full justify-center items-center my-1">
    <div class=" overflow-x-auto whitespace-nowrap custom-scrollbar ">
      <div class="inline-block px-2" v-for=" cat  in use_category.categories ">
      <div  @click="clicCategory(cat.id, cat.description)" class="min-w-[10rem] mb-3 cursor-pointer flex items-center justify-between " >
        <div class="pl-1  flex justify-center bg-[var(--orange)]  w-full  rounded-l-sm  active:scale-95 "> <span class="font-semibold"> {{ cat.name }} </span> </div>
       
        <button @click="createItems()" class=" active:scale-95 bg-[var(--orange)] rounded-r-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 104h-48v48a8 8 0 0 1-16 0v-48H72a8 8 0 0 1 0-16h48V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16"/></svg>
        </button>
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

<style scoped>


</style>