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
            <input v-model="login.data" id="email" class="w-full rounded-sm outline-none p-1 bg-slate-400" type="email">
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
      <div class="flex justify-between">
        <button @click="navigatepage('register')" class="bg-[var(--orange)] rounded-sm px-3 shadow-lg active:scale-95 flex items-center space-x-2 ">
          <span class="uppercase"> Cadastro</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.9 2.9 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.9 2.9 0 0 0 18 11a3 3 0 0 0 0-6M8 10H5V7H3v3H0v2h3v3h2v-3h3Z"/></svg>
        </button>

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
  if (login.value.data == '' || login.value.password == ''){
      toastModal().createToast('Error','preencha os campos','yellow','info')
    return 
  }

  disab.value = true
  await useUser().loginUser({data: login.value.data, password: login.value.password})
  disab.value = false 
  
  
}

</script>

<style>

</style>