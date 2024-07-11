<template>
  <div class="flex w-full justify-center items-center my-1">
    <div class=" overflow-x-auto whitespace-nowrap custom-scrollbar ">
      <div class="inline-block px-2 " v-for=" cat  in use_category.categories ">
      <div class="min-w-[10rem] mb-3 cursor-pointer active:scale-95 flex items-center justify-between border  rounded-sm" >
        <span class="mr-4 pl-1">{{ cat.name }}</span>
        <button @click="createItems()" class="border rounded-sm active:scale-95">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"/></svg>
        </button>
      </div>
    </div>
    </div>
    
    </div>
</template>

<script lang="ts" setup>
const use_category = useCategory()
const use_modal = useModal()
const use_mellury = useMetallurgy()

const createItems = () =>{
  use_modal.createItem = true 
}

const clicCategory = async (id: number, descr: string) =>{
  use_modal.idCategory = id 
  use_modal.name_category = descr

  await use_mellury.showAllMelorryId(id)
}



</script>

<style scoped>

/* Estilos adicionais, se necessário */
/* Estilos adicionais, se necessário */
.custom-scrollbar::-webkit-scrollbar {
  height:6px; /* Altura da barra de rolagem horizontal */
  width: 5px;  /* Largura da barra de rolagem vertical */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1; /* Cor do fundo da trilha */
  width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888; /* Cor da parte móvel */
  border-radius: 6px; /* Raio da borda da parte móvel */
  width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555; /* Cor da parte móvel ao passar o mouse */
  width: 5px;
}

</style>