<template>
  <div class="w-full h-full flex justify-center flex-col">
        <header>
            <div class="w-full h-16 bg-slate-500 flex items-center">
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
</template>

<script lang="ts" setup>

</script>

<style>

</style>