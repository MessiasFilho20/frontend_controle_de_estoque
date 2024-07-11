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
          Quantidade
        </TableHead>
        <TableHead class="">
          Unidade
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
      <TableRow  v-for=" items in useMetallurgy().all">
        <TableCell class="font-medium flex justify-center">
          <span class="whitespace-nowrap">{{ items.id }}</span>
        </TableCell>
        <TableCell>
          <span class="whitespace-nowrap">{{ items.descricao }}</span>
        </TableCell>
        <TableCell>
          <span class="whitespace-nowrap">{{ items.quantidade }}</span>
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