<template>
  <div class="p-2 table-scrollbar w-full h-full flex justify-center flex-col">
    <div class="backdrop-blur-md bg-white/20 rounded-xl shadow-2xl">
      <Searche/>
      <Categorys/>
      <Table v-if="useMetallurgy().all" class="custom-scrollbar" >
        <TableCaption>
        
        </TableCaption>
        
        <TableHeader  >
          <TableRow >
          <TableHead class="">
            <div class="flex justify-center">
             <span>Items</span> 
            </div>
          </TableHead>
          <TableHead class="w-[100px]">
            Descrição
          </TableHead>
          <TableHead class="">
            <div class="flex justify-center">
              <span>
                Quantidade
              </span>
            </div>
          </TableHead>
          <TableHead class="">
            <div class="flex justify-center">
              <span>
               Tamanho
              </span>
            </div>
          </TableHead>
         
          <TableHead class="">
            <div class="flex justify-center">
              <span> 
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
      <TableBody class="border">
        <TableRow  v-for=" (items , index ) in useMetallurgy().all" >
          <TableCell>
            <span class="whitespace-nowrap flex justify-center">{{ index }}</span>
          </TableCell>
          <TableCell>
            <span class="whitespace-nowrap">{{ items.descricao }}</span>
          </TableCell>
          <TableCell>
            <span class="whitespace-nowrap flex justify-center">{{ items.quantidade }}</span>
          </TableCell>
          <TableCell>
            <span class="whitespace-nowrap flex justify-center">{{ items.quantidade }}</span>
          </TableCell>
          <TableCell class="">
            <span class="whitespace-nowrap">{{ items.fornecedor }}</span>
          </TableCell>
          <TableCell class="">
            <span class="whitespace-nowrap">{{ useFormateDate().setDate(String(items.created_at)) }}</span>
          </TableCell>
          <TableCell class="">
              <div class="w-full flex justify-center ">
                  <button @click="clickremove(items.descricao, items.quantidade, items.tamanho)" class="  active:scale-95  shadow-xl rounded-md">
                     <svg class="fill-none stroke-orange-500" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="9"/><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="14;0"/></path></g></svg>    
                   </button>
              </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
    name:'select-items'
})

const use_modal = useModal()

// aqui ta errado amigo 
const clickremove = (nome: string, quantidade: number, tamanho: number) =>{
    useModal().removeItem = true
     use_modal.informItems = {name: nome, quantidade: String(quantidade), itemId:String(use_modal.idItem), tamanho: String(tamanho)} 

}
</script>

<style>

</style>