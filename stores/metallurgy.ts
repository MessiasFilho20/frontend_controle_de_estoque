export interface itemsInterface{
    quantidade: number, 
    quanti_emerg: number, 
    unidade: number, 
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
        all : [] as itemsID []
    }), 
    actions:{
        async createMetallurgy(id:number, item: itemsInterface){
           const {data, error} = await useFetch( `metallurgy/create/${id}`, {
                method: 'post', 
                baseURL: useRuntimeConfig().public.backnend, 
                body: {...item}

           })

           if (error.value){
            console.log(error.value);
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
            console.log(id);
            
            const {data, error} = await useFetch<itemsID[]>(`metallurgy/list/${id}`, {
                method: 'get', 
                baseURL: useRuntimeConfig().public.backnend
               })
               if (error.value){
                console.log(error.value);
                this.all = []
               }
               if (data.value){
                this.all = data.value
               }
        }
    }

})
