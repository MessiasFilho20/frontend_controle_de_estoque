<template>
  <div>
    <div class="px-2 w-full flex items-center">
      <span class="w-full flex justify-center">{{ props.description }}</span>
      <button @click="createItems()" class="border rounded-sm active:scale-95">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"/></svg>
      </button>
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
      <TableRow  v-for="i in 10">
        <TableCell class="font-medium flex justify-center">
          <span>{{ i }}</span>
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
const props = defineProps({
    id: {
      default: '', 
      type: Number
    }, 
    description: {
      default: '', 
      type: String
    }
})

const createItems = () =>{
  console.log('oi');
  
  use_modal.createItem = true 
}

</script>

<style>

</style>