<template>
    <div>
        <Dialog :open="useModal().removeItem">
            <DialogContent class="sm:max-w-md">
                <DialogHeader>
                    <div class="flex items-center">
                        <DialogTitle class="w-full uppercase">Retirar Item</DialogTitle>
                        <button @click="useModal().removeItem = false" class="active:scale-95">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32">
                                <path fill="currentColor"
                                    d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12" />
                                <path fill="currentColor"
                                    d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z" />
                            </svg>
                        </button>
                    </div>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>
                <div class="flex items-center space-x-2">
                    
                    <div class="grid flex-1 gap-2">
                        <div class="flex flex-col">
                            <span>
                                nome: {{ useModal().informItems.name }}
                            </span>
                            <span>
                                quantidade atual: {{ useModal().informItems.quantidade }}
                            </span>
                            
                            <div v-if="useModal().informItems.tamanho != String(0)">
                                <span>
                                    tamanho: {{ useModal().informItems.tamanho }} M<sup>2</sup>
                                </span>
                            </div>

                        </div>
                       
                        <NumberField  v-model="unidades" :min="0">
                            <label for="unidades" class="uppercase">Unidades</label>
                            <NumberFieldContent>
                            <NumberFieldDecrement />
                            <NumberFieldInput />
                            <NumberFieldIncrement />
                            </NumberFieldContent>
                        </NumberField>
                        
                        <div v-if="useModal().informItems.tamanho != String(0) ">
                            <div class="w-full">
                                <span class="uppercase">m<sup>2</sup> </span>
                               <input v-model="tamanho" class="w-full pl-2 rounded-sm bg-gray-400 outline-none" type="number">
                            </div>
                        </div>
                    </div>
                </div>
                <DialogFooter class="sm:justify-start">

                    <Button @click="clickConfirm()" size="sm" class="w-full px-3 active:scale-95">
                        <span>OK</span>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
</template>

<script lang="ts" setup>

const unidades = ref(0)
const tamanho = ref()
const use_order = useOrder()
const use_Modal = useModal()
const use_user = useUser()


const clickConfirm = async () =>{
    
    if (use_user.user.role == 'admin'){
       await use_order.createOrederAdmin({
        categoryID: use_Modal.idCategory, 
        itemID: Number(use_Modal.informItems.itemId),
        unidade: Number(unidades.value), 
        userName: String(use_user.userID.nome), 
        userCPF: String(use_user.userID.cpf), 
        tamanho: Number(tamanho.value)

        
       })
        unidades.value = 0
        tamanho.value = ''
        useModal().removeItem = false    
       return
    }else{
        await use_order.createOrder({
         categoryID: use_Modal.idCategory, 
         itemID: Number(use_Modal.informItems.itemId),
         unidade: Number(unidades.value), 
         tamanho: Number(tamanho.value)
        })
        unidades.value = 0
        tamanho.value = ''
        useModal().removeItem = false    
    }
}

</script>

<style lang="scss" scoped></style>