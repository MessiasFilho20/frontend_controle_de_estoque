<template >
  <div class="p-2 table-scrollbar w-full  flex justify-center flex-col">
    <div class="px-2 w-full flex items-center">
      <span class="w-full ">{{ useModal().name_category }}</span>
      
    </div>
    <div class="w-full h-full overflow-y-auto">

      <Table v-if="useMetallurgy().all" class="" >
        <TableCaption>
        
        </TableCaption>
        
        <TableHeader class="" >
          <TableRow >
          <TableHead class="">
            <div class="flex justify-center">
             <span class="uppercase">Items</span> 
            </div>
          </TableHead>
          <TableHead class="w-[100px]">
            <span  class="uppercase">
              Descrição
            </span>
          </TableHead>
          <TableHead class="">
            <div class="flex justify-center">
              <span  class="uppercase">
                Quantidade
              </span>
            </div>
          </TableHead>
          <TableHead class="">
            <div class="flex justify-center">
              <span  class="uppercase">
                Tamanho
              </span>
            </div>
          </TableHead>
         
          <TableHead class="">
            <div class="flex justify-center">
              <span  class="uppercase"> 
                Fornecedor
              </span> 
            </div>
          </TableHead>
          <TableHead class="">
            <div class="flex justify-center">
              <span class="uppercase"> inserido</span> 
            </div>
          </TableHead>        
          <TableHead class="">
            <div class="flex justify-center">
              <span class="uppercase whitespace-nowrap"> remover Item</span> 
            </div>
          </TableHead>
          
        </TableRow>
      </TableHeader>
      <TableBody class=" border-b ">
        <TableRow  v-for=" (items , index ) in useMetallurgy().all" >
          <TableCell class="">
            <span class="whitespace-nowrap flex justify-center">{{ index }}</span>
          </TableCell>
          <TableCell>
            <span class="whitespace-nowrap">{{ items.descricao }}</span>
          </TableCell>
          <TableCell>
            <span class="whitespace-nowrap flex justify-center">{{ items.quantidade }}</span>
          </TableCell>
          <TableCell>
            <span class="whitespace-nowrap flex justify-center">{{ items.tamanho }} <span>M<sup>2</sup> </span> </span>
          </TableCell>
          <TableCell class="">
            <span class="whitespace-nowrap">{{ items.fornecedor }}</span>
          </TableCell>
          <TableCell class="">
            <span class="whitespace-nowrap">{{ useFormateDate().setDate(String(items.created_at)) }}</span>
          </TableCell>
          <TableCell class="">
            <button @click="clickRemove(items.descricao, items.quantidade, items.tamanho, items.id)" class="flex justify-center w-full  active:scale-95 rounded-md">
              <svg class="" xmlns="http://www.w3.org/2000/svg" width="1.9em" height="1.9em" viewBox="0 0 20 20"><path fill="currentColor" d="M12.75 17.5a.75.75 0 0 0 0-1.5H6.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6.25a.75.75 0 0 0 0-1.5H6.5A3.5 3.5 0 0 0 3 6v8a3.5 3.5 0 0 0 3.5 3.5zm.991-11.301a.75.75 0 0 1 1.06.042l3 3.25a.75.75 0 0 1 0 1.018l-3 3.25A.75.75 0 1 1 13.7 12.74l1.838-1.991H7.75a.75.75 0 0 1 0-1.5h7.787l-1.838-1.991a.75.75 0 0 1 .042-1.06"/></svg>
            </button>
          </TableCell>
      
        </TableRow>
      </TableBody>
    </Table>
    </div>
  </div>

</template>

<script lang="ts" setup>

const use_modal = useModal()

const clickRemove = (nome: string, quantidade: number, tamanho: number,  id: any) =>{

  use_modal.removeItem = true
  use_modal.informItems = {name: nome, quantidade: String(quantidade), tamanho: String(tamanho), itemId: id,} 
  
}


</script>

<style>

</style>