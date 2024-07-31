<template>
    <div class="w-full h-full flex justify-center flex-col">
        <header>
            <div class="w-full h-10 border-b   flex items-center">
                <div class="w-full flex justify-end space-x-3 p-2">
                    <button @click="navigatepage('register')" class="bg-blue-400 rounded-sm px-3 shadow-lg active:scale-95">Cadastro</button>
                    <button @click="navigatepage('login')" class="bg-green-500 rounded-sm px-3 shadow-lg active:scale-95">login</button>
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