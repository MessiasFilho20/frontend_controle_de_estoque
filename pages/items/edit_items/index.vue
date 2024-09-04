<template>
  <div>
    <Searche/>
    <div class="uppercase w-full flex justify-center font-semibold">
        editar Items
    </div>
    <Categorys/>
    <Table v-if="useMetallurgy().all" class="custom-scrollbar" >
      <TableCaption>
      Editar Items
      </TableCaption>
      <div>
      
      </div>
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
            <span class="uppercase whitespace-nowrap"> Editar Item</span> 
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
        <TableCell class="">
          <span class="whitespace-nowrap">{{ items.fornecedor }}</span>
        </TableCell>
        <TableCell class="">
          <span class="whitespace-nowrap">{{ useFormateDate().setDate(String(items.created_at)) }}</span>
        </TableCell>
        <TableCell class="">
            <div class="w-full flex justify-center p-0 ">
                <svg @click="clicEditeItem(items.id)" class="fill-white  bg-[var(--orange)] active:scale-95 rounded-sm" xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.5em" viewBox="0 0 256 256"><path  d="m228.24 59.76l-32-32a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 90 128v32a6 6 0 0 0 6 6h32a6 6 0 0 0 4.24-1.76l96-96a6 6 0 0 0 0-8.48M125.51 154H102v-23.51l66-66L191.51 88ZM200 79.51L176.49 56L192 40.49L215.51 64ZM222 128v80a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h80a6 6 0 0 1 0 12H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h160a2 2 0 0 0 2-2v-80a6 6 0 0 1 12 0"/></svg>
            </div>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

  </div>
  <EditItems/>
</template>

<script lang="ts" setup>

const use_items = useMetallurgy()

definePageMeta({
    name: 'edit_items'
})



const clicEditeItem = async (id: number) =>{
  useModal().editItems = true
  useModal().idItem = id
  await use_items.getMetallurgy(id)
}


</script>

<style>

</style>