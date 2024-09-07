<template>
    <div class="w-full h-full flex justify-center flex-col">
        <header>
            <div class="w-full h-10 border-b   flex items-center">
                <div class="w-36 p-2">
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
        <div>
            <slot/>
        </div>
    </div>
    <MenuAdmin/>
    <RemoveItem/>
    <CreateCategory/>
    <CreateItems/>
    <UpdateCategory/>
    <Toaster/>
</template>

<script lang="ts" setup>
const use_category = useCategory()

onMounted(async () => {
    await use_category.getAllCategoryes()
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