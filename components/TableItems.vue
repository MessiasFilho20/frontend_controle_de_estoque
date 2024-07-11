<template>
  <div>
    <div class="px-2 w-full flex items-center">
      <span class="w-full ">{{ useModal().name_category }}</span>
   
    </div>
    <Table>
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
      <TableRow  v-for="i in useMetallurgy().all">
        <TableCell class="font-medium flex justify-center">
          <span>{{ i.descricao }}</span>
        </TableCell>
        <TableCell>
         
          <span>dljgdklgdçlkjçlkfghlkfghlkdfgdgasfa</span>
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