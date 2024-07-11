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
          <div>
            <span class="font-semibold">Criar categoria</span>
          </div>
          <span>Nome</span>
          <input v-model="category.name" class="pl-2 rounded-sm bg-gray-400 outline-none" type="text">
          <span>Descrição</span>
          <input  v-model="category.description" class="pl-2 rounded-sm bg-gray-400 outline-none" type="text">
          <div class="mt-2 w-full">
            <div  @click="createCategory()"  class=" bg-blue-950 rounded-sm active:scale-95 w-full flex justify-center ">
             <span class="uppercase text-gray-200 font-bold">Criar</span>
            </div>

          </div>
        </div>

      </div>
      <div class=" flex flex-col">
        <span class="font-semibold">Editar categorias</span>
        <div class="grid">
          <div class="overflow-x-auto whitespace-nowrap ">
          <div class=" inline-block px-2  " v-for="cate in useCategory().categories">
            <div class="border rounded-md p-1 shadow-md bg-slate-100  flex space-x-3 items-center mb-3">
              <span class="font-semibold pl-1">{{ cate.name }}</span>
              <div class="flex space-x-2 items-center  ">
                <button :disabled="btnDelete" @click="DeleteCategory(cate.id)" class="border rounded-md bg-red-400 active:scale-95">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
                </button>
                <button @click="updateCategory()" class="border rounded-md bg-blue-300 active:scale-95">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M8.707 19.707L18 10.414L13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263M21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586L19.414 9z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
 
    </DialogContent>
  </Dialog>
  </div>
</template>

<script lang="ts" setup>
const use_category = useCategory()

const btnDelete = ref(false)

const category = ref<categoryInterface>({
  name : '', 
  description: ''
})

const updateCategory = async ( ) =>{
  useModal().updateCategory = true
}

const DeleteCategory = async (id: number) =>{
 
 btnDelete.value = true 
  await use_category.deleteCategory(id)
  btnDelete.value = false
}


const createCategory = async () => {
    await use_category.createCategory({name:category.value.name, description: category.value.description})
}

</script>

<style>

</style>