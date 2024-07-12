<template >
  <div >
    <div class="px-2 w-full flex items-center">
      <span class="w-full ">{{ useModal().name_category }}</span>
   
    </div>
    <Table v-if="useMetallurgy().all">
      <TableCaption></TableCaption>
      
      <TableHeader >
        <TableRow>
        <TableHead class="">
          Items
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
            <span> Unidade </span>
          </div>
        </TableHead>
        <TableHead class="whitespace-nowrap">
          Q-Emergencia
        </TableHead>
        <TableHead class="">
          Unid.
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow  v-for=" (items , index ) in useMetallurgy().all" >
        <TableCell class="font-medium flex justify-start">
          <span class="whitespace-nowrap">{{ index }}</span>
        </TableCell>
        <TableCell>
          <span class="whitespace-nowrap">{{ items.descricao }}</span>
        </TableCell>
        <TableCell>
          <span class="whitespace-nowrap flex justify-center">{{ items.quantidade }}</span>
        </TableCell>
        <TableCell>
          <span class="whitespace-nowrap">{{ items.unidade }}</span>
        </TableCell>
        <TableCell>
          <span class="whitespace-nowrap">{{ items.quanti_emerg }}</span>
        </TableCell>
        <TableCell>
          <span class="whitespace-nowrap">{{ items.fornecedor }}</span>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
  </div>
</template>

<script lang="ts" setup>



const use_modal = useModal()




</script>

<style>

</style>