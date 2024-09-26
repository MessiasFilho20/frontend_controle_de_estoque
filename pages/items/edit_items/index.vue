<template>
  <div class="p-2">
    <Searche/>
    <div class="uppercase w-full flex justify-center font-semibold">
        editar Items
    </div>
    <Categorys/>
    <Table v-if="useMetallurgy().all" class="custom-scrollbar" >
      <TableCaption>
      Editar Items
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
        <TableCell class=" flex">
            <div class="w-full flex justify-center p-0 ">
                <svg @click="clicEditeItem(Number(items.id))" class="fill-white  bg-blue-500 active:scale-95 rounded-sm" xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.5em" viewBox="0 0 256 256"><path  d="m228.24 59.76l-32-32a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 90 128v32a6 6 0 0 0 6 6h32a6 6 0 0 0 4.24-1.76l96-96a6 6 0 0 0 0-8.48M125.51 154H102v-23.51l66-66L191.51 88ZM200 79.51L176.49 56L192 40.49L215.51 64ZM222 128v80a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h80a6 6 0 0 1 0 12H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h160a2 2 0 0 0 2-2v-80a6 6 0 0 1 12 0"/></svg>
            </div>
            <div @click="clickDeletItem(Number(items.id))" class="bg-red-500 rounded-sm flex justify-center items-center active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.5em" viewBox="0 0 56 56"><path fill="currentColor" d="m44.524 48.66l1.617-34.265h2.343c.961 0 1.735-.797 1.735-1.758s-.774-1.782-1.735-1.782H38.242V7.34c0-3.352-2.273-5.531-5.882-5.531h-8.766c-3.61 0-5.86 2.18-5.86 5.53v3.516H7.54c-.937 0-1.758.82-1.758 1.782c0 .96.82 1.758 1.758 1.758h2.344L11.5 48.684c.164 3.375 2.39 5.507 5.766 5.507h21.492c3.351 0 5.601-2.156 5.765-5.53M21.484 7.574c0-1.336.985-2.273 2.391-2.273h8.227c1.43 0 2.414.937 2.414 2.273v3.281H21.484Zm-3.867 43.102c-1.36 0-2.367-1.032-2.437-2.39l-1.64-33.891h28.85l-1.546 33.89c-.07 1.383-1.055 2.39-2.438 2.39Zm17.344-4.125c.773 0 1.36-.633 1.383-1.524l.703-24.75c.023-.89-.586-1.547-1.383-1.547c-.726 0-1.336.68-1.36 1.524l-.702 24.773c-.024.844.562 1.524 1.359 1.524m-13.898 0c.797 0 1.382-.68 1.359-1.524l-.703-24.773c-.024-.844-.656-1.524-1.383-1.524c-.797 0-1.383.657-1.36 1.547l.727 24.75c.024.891.586 1.524 1.36 1.524m8.367-1.524V20.254c0-.844-.633-1.524-1.407-1.524c-.773 0-1.43.68-1.43 1.524v24.773c0 .844.657 1.524 1.43 1.524c.75 0 1.407-.68 1.407-1.524"/></svg>
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
const alerts = useAlerts()

definePageMeta({
    name: 'edit_items'
})

const clickDeletItem = async (id:number) =>{
  await alerts.alertDeleteItemsMellury(id)
}

const clicEditeItem = async (id: number) =>{
  useModal().editItems = true
  useModal().idItem = id
  await use_items.getMetallurgy(id)
}


</script>

<style>

</style>