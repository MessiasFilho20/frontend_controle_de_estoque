<template>
  <div class="w-full h-full flex justify-center flex-col p-1 ">
    <div class="backdrop-blur-md bg-white/5 rounded-xl shadow-2xl">
      <Searche/>
      <div class="  ">
       <div class="px-2">
         <Categorys/> 
        </div>
       
       <div class="w-full overflow-hidden">
         <div >  
          <TableItems/> 
        </div>
       </div>
  
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
const use_mellury = useMetallurgy()
const use_user = useUser()

definePageMeta({
  name: 'index',
  middleware: ['global-auth'] 

})

function pedirPermissaoNotificacao() {
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
    });
  }
}

const dipararNotificacao  = (item: itemsInterface  ) =>  {
  if (Notification.permission === 'granted') {
    new Notification("Atenção", {
      body: `O item ${item.descricao} está com quantidade baixa ${item.quantidade}`
    })
  }
  }

onMounted( async () =>{
  await useCategory().getAllCategoryes()
  await use_user.getuser()
  if (use_user.user.role == 'admin'){
    pedirPermissaoNotificacao()
    const items = use_mellury.all
  
    items.forEach(item =>{
      if (item.quantidade <= item.quanti_emerg){
        dipararNotificacao(item)
      }
    })
  }

})





</script>
<!-- teste  -->
<style scoped> 

</style>