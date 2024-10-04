import Swal from "sweetalert2"
import * as XLSX from 'xlsx'
import {saveAs} from "file-saver"

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
                        title: 'CONFIRMAR',
                        text: 'Confirmar Deleção de Colaborador', 
                        icon:'success',
                        background: '#111', 
                        iconColor: '#ff6105', 
                        color: 'white',
                        showCancelButton: true,
                cancelButtonColor: 'red'
                    }).then(async (resp)=>{
                        if(resp.isConfirmed){
                            await useUser().deleteUserById(id)
                        }
                    })
                   
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
                        NOME: order.userName,
                        CATEGORIA: order.category_name, 
                        DESCRIÇÂO: order.category_description, 
                        ITEN: order.item_descricao, 
                        FORNECERDOR: order.item_fornecedor, 
                        "UNIDADES RETIRADAS": order.unidade, 
                        ESTOQUE: order.quantidade,
                        TIPO: order.role, 
                        "DATA DO PEDIDO": useFormateDate().setDate(order.created_at), 
                        userName: undefined, 
                        category_description: undefined, 
                        userCpf: undefined, 
                        category_name: undefined, 
                        item_descricao: undefined, 
                        item_fornecedor: undefined, 
                        quantidade: undefined, 
                        unidade: undefined,
                        role: undefined, 
                        created_at: undefined, 
                        updated_at: undefined, 
                        itemID: undefined, 
                        id: undefined

                      })).map(({
                        itemID,
                        id,
                        role,updated_at,
                        created_at,
                        unidade,
                        quantidade,
                        item_fornecedor,
                        item_descricao,
                        category_name,
                        category_description,
                        userCpf,
                        userName, 
                        ...rest})=> rest)
                    
                      const ws = XLSX.utils.json_to_sheet(mappeOreder)
                      const wb = XLSX.utils.book_new()
                      XLSX.utils.book_append_sheet(wb, ws, 'sheet1')
                    
                      const wbout = XLSX.write(wb,{bookType:'xlsx', type:'array'})
                      saveAs(new Blob([wbout],{type: 'application/octet-stream'}), 'data.xlsx')
                }
            })

        },

        alerteCreateIten(){
            Swal.fire({
                title: "iten",
                text: 'Iten Criado com Sucesso',  
                icon: 'success',  iconColor: '#ff6105', 
                confirmButtonColor: "green",
                confirmButtonText: "OK",
                background: '#111', 
                color: 'white',
            })
        }, 
        
        alertCreateCategory(){
            Swal.fire({
                title: "Categoria",
                text: 'Categoria Criado com Sucesso',  
                icon: 'success',  iconColor: '#ff6105', 
                confirmButtonColor: "green",
                confirmButtonText: "OK",
                background: '#111', 
                color: 'white',
            })
        },

        alertRemoveStoque(){
            Swal.fire({
                title: "RETIRAR ",
                text: 'Remoção de Iten Registrado com Sucesso',  
                icon: 'success',  iconColor: '#ff6105', 
                confirmButtonColor: "green",
                confirmButtonText: "OK",
                background: '#111', 
                color: 'white',
            })
        }
    }
    })