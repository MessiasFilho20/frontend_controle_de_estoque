<template>
  <div class="w-full h-full flex justify-center flex-col p-2">
    <div class="backdrop-blur-md bg-white/5 rounded-xl shadow-2xl p-2">
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
      <TableBody class="border-b">
        <TableRow v-for="(user , index) in allusers.users" class="font-semibold">
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
            <div class="flex  w-full justify-center gap-3 items-center">
              <button @click="clickEdiuser(user.id)"class="active:scale-95 bg-blue-500  rounded-sm">
                <svg class="fill-slate-100"  xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path  d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>
              </button>
              <button @click="clickDeletuser(user.id)" class="active:scale-95 bg-red-500  rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"/></svg>
              </button>
            </div>
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