export interface itemsInterface{
    quantidade: number, 
    quanti_emerg: number, 
   
    img: string | null, 
    fornecedor: string, 
    descricao: string,
}
export interface itemsID extends itemsInterface {
    id: number
    created_at: string, 
    updated_at: string
}

export const useMetallurgy = defineStore('metallurgy', {
    state: () =>({
        all : [] as itemsID [], 
        item: {} as itemsInterface
    }), 
    actions:{
        async createMetallurgy(id:number, item: itemsInterface){
           const {data, error} = await useFetch( `metallurgy/create/${id}`, {
                method: 'post', 
                baseURL: useRuntimeConfig().public.backnend, 
                body: {...item}
           })
           if (error.value){
            toastModal().createToast('Error', String(error.value.data.message),'yellow',"warning")
           }
           if(data.value){
           }
        },
        async getMetallurgy(id: number){
           const {data, error} = await useFetch(`metallurgy/show/${id}`, {
            method: 'get', 
            baseURL: useRuntimeConfig().public.backnend
           })
           if (error.value){
            console.log(error.value);
           }
           if (data.value){
            console.log(data.value);
           }
        },

        async showAllMelorryId(id: number) {
            const {data, error} = await useFetch<itemsID[]>(`metallurgy/list/${id}`, {
                method: 'get', 
                baseURL: useRuntimeConfig().public.backnend
               })
               if (error.value){
                this.all = []
                toastModal().createToast('Error','não há items para categoria selecionada',"yellow","warning")
               }
               if (data.value){
                this.all = data.value
               }
        },

        async getItemByIdCategory (itemdi:number, idcategory: number){
            const {data, error} = await useFetch<itemsID>(``,{})
        }
    }

})
