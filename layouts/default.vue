<template>
    <div class="w-full h-full flex justify-center flex-col">
        <header>
            <div class="w-full h-10 bg-slate-500 flex items-center">
                <div class="w-full flex justify-end space-x-3 p-2">
                    <button class="bg-blue-400 rounded-sm px-3 shadow-lg active:scale-95">Cadastro</button>
                    <button class="bg-green-500 rounded-sm px-3 shadow-lg active:scale-95">login</button>
                </div>
            </div>
        </header>
        <div>
            <slot/>
        </div>
    </div>
    <CreateCategory/>
    <CreateItems/>
</template>

<script lang="ts" setup>
const use_category = useCategory()

onMounted(async () => {
    await use_category.getAllCategoryes()
})


</script>

<style>

</style>