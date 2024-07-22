export interface orderInterface {
    categoryID: number, 
    itemID: number, 
    unidade: number
}

export const useOrder = defineStore('order',{
    state: () =>({}),
    actions:{
       async createOrder(order: orderInterface){
            const {data, error} = await useFetch('order/create',{
                method:'post',
                baseURL: useRuntimeConfig().public.backnend, 
                body: {...order}, 
                headers: {authorization:`bearer ${localStorage.getItem('login')}`}
            })
            
            if(error.value){

            }
            if(data.value){

                await useMetallurgy().showAllMelorryId(order.categoryID)
            }
        }

        

    }
})