<template>
  <div>
    <Dialog :open="useModal().createItem">
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <div class="flex items-center">
          <DialogTitle class="w-full uppercase">Criar Iten </DialogTitle>
          <button @click="useModal().createItem = false" class="active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"/><path fill="currentColor" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/></svg>
          </button>
        </div>
        <DialogDescription class="flex justify-between items-center ">
         
          <div class="uppercase">
            {{ useModal().name_category }}
          </div>
        </DialogDescription>
      </DialogHeader>
      <div class="flex items-center space-x-2">
        <div class="grid flex-1 gap-2">
          <span>Nome do Item</span>
          <input v-model="items.descricao" class="pl-2 rounded-sm bg-gray-400 outline-none" type="text">
          <span>Fornecedor</span>
          <input  v-model="items.fornecedor" class="pl-2 rounded-sm bg-gray-400 outline-none" type="text">
          <span>Quantidade</span>
          <input  v-model="items.quantidade" class="pl-2 rounded-sm bg-gray-400 outline-none" type="text">
          <span> Quantidade de emergencia</span>
          <input v-model="items.quanti_emerg" class="pl-2 rounded-sm bg-gray-400 outline-none" type="text">
        </div>
    </div>
    <DialogFooter class="sm:justify-start">
        
        <Button @click="createItems()" size="sm" class="px-3 active:scale-95">
         <span>OK</span>
        </Button>
  
      </DialogFooter>
      <div class="w-full gap-2 space-y-2">
        <div class="w-full border-b">
          <span class=" w-full uppercase ">editar Items </span>
        </div>
        <button @click="navigatePage('edit_items')" class="w-full justify-center uppercase bg-[var(--orange)] active:scale-95 flex space-x-2 border p-1 rounded-md">
            <span>editar</span>
              <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path  d="m228.24 59.76l-32-32a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 90 128v32a6 6 0 0 0 6 6h32a6 6 0 0 0 4.24-1.76l96-96a6 6 0 0 0 0-8.48M125.51 154H102v-23.51l66-66L191.51 88ZM200 79.51L176.49 56L192 40.49L215.51 64ZM222 128v80a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h80a6 6 0 0 1 0 12H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h160a2 2 0 0 0 2-2v-80a6 6 0 0 1 12 0"/></svg>
          </button>
      </div>
    </DialogContent>
  </Dialog>
  </div>
</template>

<script lang="ts" setup>
const use_metallury = useMetallurgy()
const items = ref({
    descricao: '', 
    fornecedor: '', 
    img: '', 
    quanti_emerg: 0,
    quantidade: 0, 
  
})
const navigatePage = (page: string) => {
  useModal().createItem = false
  navigateTo({
    name: page
  })
}
const createItems = async () =>{
    await use_metallury.createMetallurgy(useModal().idCategory, items.value = {
      descricao: items.value.descricao, 
      fornecedor: items.value.fornecedor, 
      img: items.value.img, 
      quanti_emerg: Number(items.value.quanti_emerg), 
      quantidade: Number(items.value.quantidade), 
    } )

    items.value = {descricao: '', fornecedor: '', img: '', quanti_emerg: 0, quantidade: 0}



    useModal().createItem = false


}
</script>

<style>

</style>