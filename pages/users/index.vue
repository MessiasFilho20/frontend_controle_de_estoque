<template>
  <div>
    <Searche/>
    <div class="w-full pl-2">
      <span class="uppercase font-semibold">usuarios</span>
    </div>
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
          Nome
        </TableHead>
        <TableHead class="">
          <div class="flex justify-center">
            <span>
              CPF
            </span>
          </div>
        </TableHead>
       
        <TableHead class="">
          <div class="flex justify-start">
            <span> 
              Gmail
            </span> 
          </div>
        </TableHead>
        <TableHead class="">
          <div class="flex justify-center">
            <span class="uppercase"> Acesso</span> 
          </div>
        </TableHead>        
        <TableHead class="">
          <div class="flex justify-center">
            <span class="uppercase whitespace-nowrap"> Editar USuario </span> 
          </div>
        </TableHead>
        
      </TableRow>
    </TableHeader>
    <TableBody class="border">
      <TableRow v-for="(user , index) in allusers.users" >
        <TableCell>
          <span class="whitespace-nowrap flex justify-center">{{ index }}</span>
        </TableCell>
        <TableCell>
          <span class="whitespace-nowrap">{{ user.nome }}</span>
        </TableCell>
        <TableCell>
          <span class="whitespace-nowrap flex justify-center">{{ user.cpf }}</span>
        </TableCell>
        <TableCell class="">
          <span class="whitespace-nowrap"> {{ user.gmail }}</span>
        </TableCell>
        <TableCell class="">
          <span class="whitespace-nowrap"> {{ user.role }}</span>
        </TableCell>
        <!-- <TableCell class="">
          <button class="flex justify-center w-full p-2 active:scale-95 rounded-md">
            <svg class="" xmlns="http://www.w3.org/2000/svg" width="1.9em" height="1.9em" viewBox="0 0 20 20"><path fill="currentColor" d="M12.75 17.5a.75.75 0 0 0 0-1.5H6.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6.25a.75.75 0 0 0 0-1.5H6.5A3.5 3.5 0 0 0 3 6v8a3.5 3.5 0 0 0 3.5 3.5zm.991-11.301a.75.75 0 0 1 1.06.042l3 3.25a.75.75 0 0 1 0 1.018l-3 3.25A.75.75 0 1 1 13.7 12.74l1.838-1.991H7.75a.75.75 0 0 1 0-1.5h7.787l-1.838-1.991a.75.75 0 0 1 .042-1.06"/></svg>
          </button>
        </TableCell> -->
    
      </TableRow>
    </TableBody>
  </Table>
  </div>
</template>

<script lang="ts" setup>

const allusers = useUser()
definePageMeta({
    name: 'users'
})

onMounted(async () =>{
    useModal().menuadmin = false
    await allusers.getAllUsers() 
})

</script>

<style>

</style>