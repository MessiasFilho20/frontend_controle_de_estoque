<template>
  <div>
    <Dialog :open="useModal().updateCategory">
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <div class="flex items-center">
          <DialogTitle class="w-full uppercase">Atualizar </DialogTitle>
          <button @click="useModal().updateCategory = false" class="active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"/><path fill="currentColor" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/></svg>
          </button >
        </div>
        <DialogDescription>
        </DialogDescription>
      </DialogHeader>
      <div class="flex items-center space-x-2">
        <div class="grid flex-1 gap-2">
          <span>Nome</span>
          <input v-model="use_catego.category.name" class="pl-1 bg-gray-400 rounded-sm" type="text">
          <span>Descrição</span>
          <input v-model="use_catego.category.description" class="pl-1 bg-gray-400 rounded-sm" type="text">
      </div>
      
    </div>
    <DialogFooter class="sm:justify-start">
        
        <Button @click="updateCategory()" size="sm" class="px-3 active:scale-95">
         <span>OK</span>
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  </div>
</template>
<script lang="ts" setup>

const use_catego = useCategory()

const categ  =  ref <categoryInterface>({
  name: '', 
  description: ''
})
 

const updateCategory = async () =>{
    use_catego.updateCategory(useModal().idCategory, {
      name: use_catego.category.name, 
      description: use_catego.category.description
    })
}

</script>

<style>

</style>