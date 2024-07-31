<template>
  <div>
    <Dialog :open="useModal().login = true">
        <DialogTrigger as-child>
   
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Login</DialogTitle>
        <DialogDescription>
            Informe email e senha para acessar o serviço
        </DialogDescription>
      </DialogHeader>
      <div class=" flex items-center w-full">
        <div class="flex flex-col w-full">
            <label class="font-semibold" for="email">
                Email
            </label>
            <input v-model="login.data" id="email" class="w-full rounded-sm outline-none p-1 bg-slate-400" type="text">
        </div>
      </div>
      <div class=" flex items-center w-full">
        <div class="flex flex-col w-full">
            <label class="font-semibold" for="senha">
                Senha
            </label>
            <input v-model="login.password" id="senha" class="w-full rounded-sm outline-none p-1 bg-slate-400" type="password">
        </div>
      </div>
      <div>
        <button class="active:scale-95">
            <span class="underline font-semibold ">Esqueci a senha </span>
        </button>
      </div>
      <DialogFooter class="flex flex-row space-x-3 justify-end" >
        <button @click="navigatepage('index')" class="active:scale-95 bg-red-500 p-1 rounded-sm">
         <span  class="font-semibold uppercase text-white">Cancelar</span> 
        </button>
        <button @click="clickConfirmar()" :disabled="disab" :class="[disab?  'bg-slate-400': 'active:scale-95 bg-blue-950 p-1 rounded-sm']">
          <span class="font-semibold uppercase text-white">Confirmar</span>
        </button>
      </DialogFooter>
    </DialogContent>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import type { userLogin } from '~/stores/user';

const disab = ref(false)

const login = ref<userLogin>({
  data: '', password: ''
})

const navigatepage = (name: string) =>{
    useModal().login = false
    navigateTo({
        name: name
    })
}

const clickConfirmar = async () =>{
  disab.value = true
  await useUser().loginUser({data: login.value.data, password: login.value.password})
  disab.value = false 
  
  
}

</script>

<style>

</style>