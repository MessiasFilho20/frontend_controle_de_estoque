<template>
  <div class="">
    <Dialog :open="useModal().category">
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <div class="flex items-center">
          <DialogTitle class="w-full uppercase">Categoria </DialogTitle>
          <button @click="useModal().category = false" class="active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"/><path fill="currentColor" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/></svg>
          </button >
        </div>
        <DialogDescription> 
        </DialogDescription>
      </DialogHeader>
      
      <div class="flex items-center space-x-2">
        <div class="grid w-full">
       
          <span>Nome</span>
          <input v-model="category.name" class="pl-2 rounded-sm bg-gray-400 outline-none" type="text">
          <span>Descrição</span>
          <input  v-model="category.description" class="pl-2 rounded-sm bg-gray-400 outline-none" type="text">
          <div class="mt-2 w-full">
            <Button :disabled="btncreate" @click="createCategory()"  class="w-full bg-[var(--orange)] rounded-sm">
              <div class=" active:scale-95 w-full flex justify-center space-x-3 ">
               <span class="uppercase text-gray-200 font-bold">Criar</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5v2H5v14h14v-5z"/><path fill="currentColor" d="M21 7h-4V3h-2v4h-4v2h4v4h2V9h4z"/></svg>
              </div>

            </Button>

          </div>
        </div>

      </div>
      <div class=" flex flex-col gap-2">
        <span class="font-semibold border-b w-full">Editar categorias</span>
        <div class="grid">
         <Button @click="navegateToPage('categories')" class="flex justify-center bg-[var(--orange)] items-center space-x-3  rounded-sm active:scale-95">

          <span class="uppercase font-bold text-gray-200">editar</span>
          <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path  d="m228.24 59.76l-32-32a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 90 128v32a6 6 0 0 0 6 6h32a6 6 0 0 0 4.24-1.76l96-96a6 6 0 0 0 0-8.48M125.51 154H102v-23.51l66-66L191.51 88ZM200 79.51L176.49 56L192 40.49L215.51 64ZM222 128v80a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h80a6 6 0 0 1 0 12H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h160a2 2 0 0 0 2-2v-80a6 6 0 0 1 12 0"/></svg>
         </Button>
        </div>
      </div>
 
    </DialogContent>
  </Dialog>
  </div>
</template>

<script lang="ts" setup>
const use_category = useCategory()

const btncreate = ref(false)

const category = ref<categoryInterface>({
  name : '', 
  description: ''
})

const navegateToPage = (page: string) =>{

  navigateTo({
    name: page
  })
  useModal().category = false
}

const createCategory = async () => {
    btncreate.value = true
    await use_category.createCategory({name:category.value.name, description: category.value.description})
    btncreate.value = false
    
  }

</script>

<style>

</style>