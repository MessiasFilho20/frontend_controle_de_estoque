<template>
  <div class="w-full h-full flex flex-col p-2">
    <div class="backdrop-blur-md bg-white/20 rounded-xl shadow-2xl p-2">
      <Searche/>
      <div class="px-2">
        <span class="uppercase">Edite categorias</span>
      </div>
      <Table >
        <TableCaption>
        
        </TableCaption>
        
        <TableHeader class="" >
          <TableRow class="  ">
            <TableHead class="w-16  flex items-center justify-center">
              <span>
                Items
              </span>
            </TableHead>
          <TableHead >
            Nome
          </TableHead>
          <TableHead class="w-full">
            Descrição
          </TableHead>
         
          <TableHead class="font-semibold">
            Editar
          </TableHead>
         
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(cate, index) in use_category.categories " :key="cate.id">
          <TableCell class="flex justify-center">
            <span class=" whitespace-nowrap">{{index}}</span>
          </TableCell>
          <TableCell class="">
            <span class="whitespace-nowrap">{{ cate.name}}</span>
          </TableCell>
          <TableCell>
            <span class="whitespace-nowrap">{{ cate.description }}</span>
          </TableCell>
          <TableCell>
            <div class="flex space-x-3 justify-center items-center">
              <button @click="editCategoryes(cate.id)" class="active:scale-95 bg-blue-500 p-1 rounded-md">
                <svg class="fill-slate-100"  xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path  d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>
              </button>
              <button  @click="deleteCategoryes(cate.id)" class="active:scale-95 bg-red-500 p-1 rounded-md">
                <svg class="fill-slate-100" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path  d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
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
definePageMeta({
    name:'categories'
})

const use_user = useUser()
const router = useRouter()
const use_alerts = useAlerts()

onMounted(async () => {
  await use_user.getuser()
  
  if ( use_user.user.role != 'admin'){
    router.push('/404')
  }
})

const use_category = useCategory()

const deleteCategoryes = async (id: number) =>{
  use_alerts.alertDeleteCategory(id)

}

const editCategoryes = async (id: number) =>{
   useModal().updateCategory = true
   useModal().idCategory = id
   await use_category.getCategoryId(id)
} 

</script>

<style>

</style>