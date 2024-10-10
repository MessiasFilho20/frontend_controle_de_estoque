<template>
  <div class="p-2 table-scrollbar w-full h-full flex justify-center flex-col">
   <div class="backdrop-blur-md bg-white/20 rounded-xl shadow-2xl p-2 w-full h-full flex flex-col">
     <Searche/>
     <div class="w-full ">
       <div class="flex justify-between">
         <span class="uppercase font-semibold">Pedidos</span>
         <div>
           <button @click="dowloadxls()" class="bg-[var(--orange)] rounded-sm active:scale-95">
             <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg>
           </button>
         </div>
       </div>
     </div>
     <div class="w-full h-full overflow-y-auto">
       <Table v-if="useMetallurgy().all" class=" w-full " >
         <TableCaption>
         
         </TableCaption>
         
         <TableHeader  >
           <TableRow class="custom-scrollbar" >
           <TableHead class="">
             <div class="flex justify-center">
              <span class="uppercase">Items</span> 
             </div>
           </TableHead>
           <TableHead class="w-[100px]">
             <span class="uppercase">
               Nome
             </span>
           </TableHead>
           <TableHead class="">
             <div class="flex justify-center">
               <span class="uppercase"> Categoria </span> 
             </div>
           </TableHead>        
           <TableHead class="">
             <div class="flex justify-start">
               <span class="uppercase"> 
                 descrição categoria
               </span> 
             </div>
           </TableHead>
           <TableHead class="">
             <div class="flex justify-start">
               <span class="uppercase"> 
                itens
               </span> 
             </div>
           </TableHead>
           <TableHead class="">
             <div class="flex justify-center">
               <span class="uppercase"> Fornecedor</span> 
             </div>
           </TableHead>        
           <TableHead class="">
             <div class="flex justify-center">
               <span class="uppercase"> Unidade Retiradas</span> 
             </div>
           </TableHead>        
           <TableHead class="">
             <div class="flex justify-center">
               <span class="uppercase"> tamanho</span> 
             </div>
           </TableHead>        
           <TableHead class="">
             <div class="flex justify-center">
               <span class="uppercase"> Estoque</span> 
             </div>
           </TableHead>        
           <TableHead class="">
             <div class="flex justify-center">
               <span class="uppercase">Total</span> 
             </div>
           </TableHead>        
           <TableHead class="">
             <div class="flex justify-center">
               <span class="uppercase">tipo</span> 
             </div>
           </TableHead>        
           <TableHead class="">
             <div class="flex justify-center">
               <span class="uppercase whitespace-nowrap">Data do Pedido</span> 
             </div>
           </TableHead>        
         </TableRow>
       </TableHeader>
       <TableBody class="border-b ">
         <TableRow v-for="(order, index) in use_orders.orders">
           <TableCell>
             <span class="flex justify-center">{{index}}</span>
           </TableCell>
           <TableCell>
             <span class="whitespace-nowrap">{{ order.userName }}</span>
           </TableCell>
           <TableCell class="">
             <span class="whitespace-nowrap">{{ order.category_name }}</span>
           </TableCell>
           <TableCell class="">
             <span class="whitespace-nowrap"> {{ order.category_description }}</span>
           </TableCell>
           <TableCell class="">
             <span class="whitespace-nowrap"> {{ order.item_descricao }} </span>
           </TableCell>
           <TableCell class="">
             <span class="whitespace-nowrap"> {{ order.item_fornecedor }} </span>
           </TableCell>
           <TableCell class="">
             <span class="whitespace-nowrap flex justify-center"> {{ order.unidade }} </span>
           </TableCell>
           <TableCell class="">
             <span class="whitespace-nowrap flex justify-center"> {{ order.tamanho }} </span>
           </TableCell>
           <TableCell class="">
             <span class="whitespace-nowrap flex justify-center"> {{ order.quantidade }} </span>
           </TableCell>
           <TableCell class="">
             <span class="whitespace-nowrap flex justify-center space-x-1"> <span> {{ order.tamanho_total }}</span>  <span>M<sup>2</sup>  </span> </span>
           </TableCell>
           <TableCell class="">
             <span class="whitespace-nowrap flex justify-center"> {{ order.role }} </span>
           </TableCell>
           <TableCell class="">
             <span class="whitespace-nowrap"> {{ useFormateDate().setDate(order.created_at)  }} </span>
           </TableCell>
         </TableRow>
       </TableBody>
     </Table>
     </div>
   </div>
  </div>
</template>

<script lang="ts" setup>
const use_orders = useOrder()
definePageMeta({
    name: 'orders'
})

const dowloadxls = () =>{
  useAlerts().alertDownloadrelatorio()
}

onMounted(async () =>{
    useModal().menuadmin = false
    await use_orders.getAllOrders() 
})
</script>

<style>


</style>