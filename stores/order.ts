export interface orderInterface {
    categoryID: number, 
    itemID: number, 
    unidade: number, 
    tamanho: number
}

export interface getOrdersInterface {
    id: number,
    userName: string ,
    userCpf: string,
    itemID: number,
    item_descricao: string,
    descricao:string,
    item_fornecedor: string,
    category_description: string,
    category_name: string,
    tamanho: number, 
    tamanho_total: number
    unidade: number,
    role: string,
    quantidade: number,
    created_at: string,
    updated_at: string
}

export interface orderAdmininterface extends orderInterface {
    userName: string, 
    userCPF: string
}

export const useOrder = defineStore('order',{
    state: () =>({
        data: {} as getOrdersInterface, 
        orders: [] as getOrdersInterface[]
    }),
    actions:{
       async createOrder(order: orderInterface){
            const {data, error} = await useFetch('order/create',{
                method:'post',
                baseURL: useRuntimeConfig().public.backnend, 
                body: {...order}, 
                headers: {authorization:`bearer ${localStorage.getItem('login')}`}
            })
            
            if(error.value){
                toastModal().createToast('Error',"error na remoçao do item e registro", "yellow","info")
            }
            if(data.value){

                await useMetallurgy().showAllMelorryId(order.categoryID)
                useAlerts().alertRemoveStoque()
            }
        }, 

        async createOrederAdmin( orderAdmin: orderAdmininterface ){
            const {data, error} = await useFetch('order/createadmin',{
                
                method: 'post', 
                baseURL: useRuntimeConfig().public.backnend, 
                body: {...orderAdmin},
                headers: {authorization:`bearer ${localStorage.getItem('login')}`},
            })
            if (error.value){
                toastModal().createToast('Error',"error na remoçao do item e registro", "yellow","info")
                
            }
            if (data.value){
             
               useMetallurgy().showAllMelorryId(useModal().idCategory)
               useAlerts().alertRemoveStoque()
            }
        }, 

        async getAllOrders(){
            interface orders {
                datas: [] 
            }
            const {data, error} = await useFetch<orders>('order/all',{
                method: 'get', 
                baseURL: useRuntimeConfig().public.backnend, 
                headers: {Authorization:`Bearer ${localStorage.getItem('login')}`}
            })
            if(error.value){

            }
            if (data.value){
                this.orders = data.value.datas
                
            }
            
        }

    }
})