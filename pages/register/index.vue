<template>
  <div class="w-full h-screen p-2 flex flex-col item-center ">
    <div class="h-full shadow-md rounded-sm p-1">
        <div class=" p-1 rounded-sm shadow-xl ">
            <div class=" flex justify-center items-center p-2">
                <span class="font-semibold ">Cadastre-se</span>
            </div>
            <div class="p-1 flex flex-col border mt-2 shadow-md rounded-sm">
                <span class="font-semibold">Nome </span>
                <input v-model="user.nome" class=" bg-[var(--darkorange)] shadow-sm p-1 outline-none rounded-sm"type="text" placeholder="Digite seu nome">
            </div>
            <div class="p-1 flex flex-col border mt-2 shadow-md rounded-sm">
                <span class="font-semibold">Email </span>
                <input v-model="user.gmail" class="bg-[var(--darkorange)] shadow-sm p-1 outline-none rounded-sm"type="text" placeholder="Digite seu email">
            </div>
            <div class="p-1 flex flex-col border mt-2 shadow-md rounded-sm">
                <span class="font-semibold">CPF </span>
                <input v-model="user.cpf" class="bg-[var(--darkorange)] shadow-sm p-1 outline-none rounded-sm"type="text" placeholder="Digite seu CPF">
            </div>
            <div class="p-1 flex flex-col border mt-2 shadow-md rounded-sm">
                <span class="font-semibold">Senha </span>
                <input v-model="user.password" class="bg-[var(--darkorange)] shadow-sm p-1 outline-none rounded-sm"type="password" placeholder="Digite sua senha">
            </div>
            <div class="p-1 flex flex-col border mt-2 shadow-md rounded-sm">
                <span class="font-semibold">Confirmar senha </span>
                <input v-model="user.passwordconfirm" class="bg-[var(--darkorange)] shadow-sm p-1 outline-none rounded-sm"type="password" placeholder="Confirme a sua senha">
            </div>
    
            <div class="w-full flex justify-end space-x-3 py-2">
                <button @click="clickCancel('index')" class="uppercase active:scale-95 bg-red-500 font-semibold p-1 rounded-sm text-white shadow-md"> Cancelar</button>
                <button :disable="disable" @click="clickConfirm()" class="uppercase active:scale-95 bg-green-500 font-semibold p-1 rounded-sm text-white shadow-md">Confirmar</button>
            </div>

        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { userInterface } from '~/stores/user';

definePageMeta({
    name:"register"
})

const disable = ref(false)

const user = ref<userInterface>({
    nome: '', 
    gmail: '',
    cpf: '',
    password: '',
    passwordconfirm: ''
})

const clickConfirm =  async () =>{
    disable.value = true
    console.log(user.value); 
    await useUser().createUser({
        nome: user.value.nome, 
        gmail: user.value.gmail, 
        cpf: user.value.cpf,
        password: user.value.password, 
        passwordconfirm: user.value.passwordconfirm
    })
    disable.value = false
    user.value = {nome: '',gmail: '',cpf: '',password:'',passwordconfirm: ''}
    navigateTo({
        name: 'index'
    })
}

const clickCancel = (name: string) => {
    navigateTo({
        name: name
    })
}
</script>

<style>

</style>