<template>
  <div class="w-full h-full flex justify-center flex-col p-2">
    <div class="backdrop-blur-md bg-white/20 rounded-xl shadow-2xl">
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
             <span class="uppercase">Items</span> 
            </div>
          </TableHead>
          <TableHead class="w-[100px]">
            <span class="uppercase">
              Nome
            </span>
          </TableHead>
        
          <TableHead class="">
            <div class="flex justify-start">
              <span class="uppercase"> 
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
         
          <TableCell class="">
            <span class="whitespace-nowrap"> {{ user.gmail }}</span>
          </TableCell>
          <TableCell class="">
            <span class="whitespace-nowrap"> {{ user.role }}</span>
          </TableCell>
          <TableCell class="flex space-x-1">
            <button @click="clickEdiuser(user.id)"class="flex  justify-center w-full p-2 active:scale-95 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20h9M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854zM15 5l3 3"/></svg>
            </button>
            <button @click="clickDeletuser(user.id)" class="flex  justify-center w-full p-2 active:scale-95 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"/></svg>
            </button>
          </TableCell>
      
        </TableRow>
      </TableBody>
    </Table>
    </div>
  </div>
</template>

<script lang="ts" setup>
const use_alerts = useAlerts()
const allusers = useUser()
const use_modal = useModal()
definePageMeta({
    name: 'users'
})

const clickEdiuser = (id : number) => {
    use_modal.edit_user = true
    use_modal.user_id = id
    allusers.getUserById(id)
}

const clickDeletuser = (id: number ) =>{
   use_alerts.alertDeleteusers(id)
}
onMounted(async () =>{
    useModal().menuadmin = false
    await allusers.getAllUsers() 
})

</script>

<style>

</style>