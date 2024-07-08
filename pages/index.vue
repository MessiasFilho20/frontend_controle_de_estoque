<template>
  <div class="w-full h-full flex justify-center flex-col">
   <div class="flex w-full space-x-3 px-2 my-1">
      <button @click="clickcreate()" class="px-2 active:scale-95 flex justify-center border bg-blue-400 rounded-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.3em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M16.035 3.015a3 3 0 0 1 4.099-.135l.144.135l.707.707a3 3 0 0 1 .135 4.098l-.135.144L9.773 19.177a1.5 1.5 0 0 1-.562.354l-.162.047l-4.454 1.028a1 1 0 0 1-1.22-1.088l.02-.113l1.027-4.455a1.5 1.5 0 0 1 .29-.598l.111-.125zm-.707 3.535l-8.99 8.99l-.636 2.758l2.758-.637l8.99-8.99l-2.122-2.12Zm3.536-2.121a1 1 0 0 0-1.32-.083l-.094.083l-.708.707l2.122 2.121l.707-.707a1 1 0 0 0 .083-1.32l-.083-.094z"/></g></svg>
      </button>
      <div class="flex w-full">
        <input class="w-full bg-slate-300 outline-none pl-1 rounded-l-sm" type="text">
        <button class="px-2 active:scale-95 flex justify-center border bg-blue-400 rounded-r-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.3em" viewBox="0 0 512 512"><path fill="currentColor" d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195M48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192m408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.028 24.028 0 0 1-.002 33.941"/></svg>
        </button>
      </div>
   </div>
   <div class="px-2">
     <Categorys/>
   </div>
   <div class="w-full overflow-hidden">
    <TableItems/>
   </div>
  </div>
</template>

<script lang="ts" setup>

const use_modal = useModal()


const clickcreate = () =>{
  use_modal.category = true
onMounted( async  () =>{
  console.log('oi');
     
  await useCategory().getAllCategoryes()
  })
}


</script>

<style>

</style>