<template>
    <div class="w-full flex flex-col h-full">
        <header class="fixed top-0 left-0 w-full bg-[var(--headerblack)] shadow-lg z-50">
            <div class="w-full  h-10 flex items-center">
                <div @click="navigatepage('index')" class="w-36 p-2 active:scale-95">
                    <img src="../assets/imagens/Dimens_o-da-logo-da-Sou--180x60-px.png" alt="">
                </div>
                <div class="w-full flex justify-end space-x-3 p-2">
                    <button @click="navigatepage('login')" class=" border rounded-sm px-3 space-x-2 shadow-lg active:scale-95 flex justify-center items-center">
                       <span class="uppercase font-semibold ">login</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"/></svg>
                    </button>
                </div>
            </div>
        </header>
        <div class="relative mt-6 ">
            <img class="h-screen fixed object-cover w-full flex justify-center items-center" src="../assets/imagens/deposito2.jpg" alt="bg">
            <div class="absolute w-screen top-5 left-0 flex  justify-center z-10">
             
                    <slot class=""/>
             
            </div>
        </div>
        <div>
            teste
        </div>
    </div>
    <MenuAdmin/>
    <RemoveItem/>
    <CreateCategory/>
    <CreateItems/>
    <UpdateCategory/>
    <Toaster/>
    <EditUser/>
</template>

<script lang="ts" setup>
const use_category = useCategory()
const user = useUser()
onMounted(async () => {
    await use_category.getAllCategoryes()
    // await user.getuser()
})

const color = useColorMode()

color.value = 'dark'

const navigatepage = (name: string) =>{
    navigateTo({
        name: name
    })
} 

</script>

<style>

</style>