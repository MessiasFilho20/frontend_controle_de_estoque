import Swal from "sweetalert2"
import * as XLSX from 'xlsx'
import {saveAs} from 'file-saver'

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
                        text: 'categoria deletada com sucesso !', 
                        icon:'success',
                        background: '#111', 
                        iconColor: '#ff6105', 
                        color: 'white'
                    })
                    await useCategory().deleteCategory(id)
                }
            })

        },

        alertDeleteItemsMellury(id: number){
            Swal.fire({
                title: 'Deletar !', 
                text: 'deseja realmente deletar esse Iten ? ', 
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
                        text: 'iten deletado com sucesso !', 
                        icon:'success',
                        background: '#111', 
                        iconColor: '#ff6105', 
                        color: 'white'
                    })
                    await useMetallurgy().deleteItemsMallury(id)
                    
                }
            })
        },

        alertDownloadrelatorio(){

            Swal.fire({
                title: 'Baixar !', 
                text: 'deseja realmente baixar esse relatorio ? ', 
                icon: 'question', 
                iconColor: '#ff6105', 
                confirmButtonColor: "green",
                confirmButtonText: "Confirmar",
                background: '#111', 
                color: 'white',
                showCancelButton: true,
                cancelButtonColor: 'red'
            }).then(async (result) =>{
                if (result.isConfirmed){
                  
                    const mappeOreder = useOrder().orders.map(order => ({
                        ...order, 
                        acesso: order.role, 
                        atualizado: useFormateDate().setDate(order.updated_at),
                        criado: useFormateDate().setDate(order.created_at), 
                        role: undefined, 
                        created_at: undefined, 
                        updated_at: undefined
                      })).map(({role,updated_at,created_at, ...rest})=> rest)
                    
                      const ws = XLSX.utils.json_to_sheet(mappeOreder)
                      const wb = XLSX.utils.book_new()
                      XLSX.utils.book_append_sheet(wb, ws, 'sheet1')
                    
                      const wbout = XLSX.write(wb,{bookType:'xlsx', type:'array'})
                      saveAs(new Blob([wbout],{type: 'application/octet-stream'}), 'data.xlsx')
                    
                }
            })

        }
    }
})