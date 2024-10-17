<template>
  <div class="w-full h-full flex justify-center flex-col p-2">
    <div class="backdrop-blur-md bg-white/5 rounded-xl shadow-2xl">
      <Searche/>
      <div class="flex justify-center  ">
          <span class="font-semibold uppercase"> Criar Pedido </span>
      </div>
      <span class="text-sm p-2 font-semibold font-italic"> Selecione uma pessoa </span>
       <div class="w-full h-full overflow-y-auto p-2">
         <Table v-if="useMetallurgy().all" class="custom-scrollbar" >
           <TableCaption>
           
           </TableCaption>
           
             <TableHeader  >
               <TableRow >
               <TableHead class="w-3">
                 <div class="flex justify-center items-center w-3">
                  <span class="uppercase items-center">Items</span> 
                 </div>
               </TableHead>
               <TableHead class="w-3">
                 <div class="">
                   <span class="uppercase">
                     Nome
                   </span>
                 </div>
               </TableHead>
               <TableHead class="">
                 <span class="uppercase">
                     email
                 </span>
               </TableHead>
               <TableHead class="w-5">
                 <div class="flex justify-center">
                   <span class="uppercase whitespace-nowrap">selecionar</span> 
                 </div>
               </TableHead>
             </TableRow>
           </TableHeader>
           <TableBody class="border-b">
             <TableRow v-for="(users, index ) in use_users.users" class="font-semibold">
               <TableCell>
                 <div class="flex justify-center w-5">
                   <span class="">{{ index }}</span>
                 </div>
               </TableCell>
               <TableCell>
                 <span class="whitespace-nowrap">{{ users.nome }}</span>
               </TableCell>
               <TableCell>
                 <span class="whitespace-nowrap">{{ users.gmail }}</span>
               </TableCell>
               <TableCell class="">
                 <div class="flex justify-center w-full">
                   <button @click="clickProx(users.id)" class="px-2 rounded-md active:scale-95">
                   <svg  xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M4 40.836c4.893-5.973 9.238-9.362 13.036-10.168c3.797-.805 7.412-.927 10.846-.365V41L44 23.545L27.882 7v10.167c-6.349.05-11.746 2.328-16.192 6.833C7.246 28.505 4.682 34.117 4 40.836Z" clip-rule="evenodd"/></svg>
                 </button>
                 </div>
               </TableCell>
             </TableRow>
           </TableBody>
           
       </Table>
       </div>
    </div>
    </div>
</template>

<script lang="ts" setup>

const use_users = useUser()

definePageMeta({
    name:'create_order',
})

const clickProx = async ( id: number) => {
  await use_users.getUserById(id)
  
  navigateTo({
    name: 'select-items'
  })
}

onMounted(async () =>{
  useModal().menuadmin = false
  await use_users.getAllUsers()
})

</script>

<style>

</style>