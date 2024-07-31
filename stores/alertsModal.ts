import Swal from "sweetalert2"

export const useAlerts = defineStore('useAlerts', {
    state: () => ({}), 
    actions:{
          alertDeleteusers(id: number){
            Swal.fire({
                title: 'Deletar !', 
                text: 'deseja realmente deletar esse colabborador ? ', 
                icon: 'warning', 
                iconColor: '#ff6105', 
                confirmButtonColor: "green",
                confirmButtonText: "Confirmar",
                background: '#111', 
                color: 'white',
                showCancelButton: true,
                cancelButtonColor: 'red'
            }).then(async (result) =>{
                if (result.isConfirmed){
                    Swal.fire({
                        title: 'deletado !!!',
                        text: 'colaborador deletado com sucesso !', 
                        icon:'success',
                        background: '#111', 
                        iconColor: '#ff6105', 
                        color: 'white'
                    })
                    await useUser().deleteUserById(id)
                }
            })

        },

        alertDeleteCategory(id: number){
            Swal.fire({
                title: 'Deletar !', 
                text: 'deseja realmente deletar essa categoria ? ', 
                icon: 'warning', 
                iconColor: '#ff6105', 
                confirmButtonColor: "green",
                confirmButtonText: "Confirmar",
                background: '#111', 
                color: 'white',
                showCancelButton: true,
                cancelButtonColor: 'red'
            }).then(async (result) =>{
                if (result.isConfirmed){
                    Swal.fire({
                        title: 'deletado !!!',
                        text: 'colaborador deletado com sucesso !', 
                        icon:'success',
                        background: '#111', 
                        iconColor: '#ff6105', 
                        color: 'white'
                    })
                    await useCategory().deleteCategory(id)
                }
            })

        }
    }
})