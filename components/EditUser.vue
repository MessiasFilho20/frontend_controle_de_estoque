<template>
  <div>
    <Dialog :open="useModal().edit_user">
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <div class="flex items-center">
          <DialogTitle class="w-full uppercase">Editar Item</DialogTitle>
          <button @click="useModal().edit_user = false" class="active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"/><path fill="currentColor" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/></svg>
          </button >
        </div>
        <DialogDescription class="flex justify-start ">

        </DialogDescription>
      </DialogHeader>
      <div class="flex items-center space-x-2">
        <div class="grid flex-1 gap-2">
         
          <span>Nome </span>
          <input v-model="user.userID.nome" class="pl-2 rounded-sm bg-gray-500 outline-none" type="text">
          <span>CPF</span>
          <input  v-model="user.userID.cpf" class="pl-2 rounded-sm bg-gray-500 outline-none" type="text">
          <span>Gmail</span>
          <input  v-model="user.userID.gmail" class="pl-2 rounded-sm bg-gray-500 outline-none" type="text">
          <span>Acesso</span>
          <input v-model="user.userID.role" class="pl-2 rounded-sm bg-gray-500 outline-none" type="text">
        </div>
    </div>
    <DialogFooter class="sm:justify-start">
        
        <Button @click="clickUpdate()" size="sm" class="px-3 active:scale-95">
         <span>OK</span>
        </Button>
        
      </DialogFooter>
    </DialogContent>
  </Dialog>
  </div>
</template>

<script lang="ts" setup>
  const user = useUser()
  const clickUpdate = async () =>{
    await user.updateUser(useModal().user_id, {
      nome: user.userID.nome,
      cpf: user.userID.cpf, 
      gmail: user.userID.gmail,
      role: user.userID.role
    })

  }

</script>

<style>

</style>