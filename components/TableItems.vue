<template>
  <div>
    <Table>
    <TableCaption></TableCaption>
    <TableHeader>
      <div>asdad</div>
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
      <TableRow  v-for="i in 10">
        <TableCell class="font-medium flex justify-center">
          <span>{{ i }}</span>
        </TableCell>
        <TableCell>
          <div>
            
          </div>
          <span>dljgdklgdçlkjçlkfghlkfghlkdfgdgasfa</span>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
    id: {
      default: '', 
      type: Number
    }
})

</script>

<style>

</style>