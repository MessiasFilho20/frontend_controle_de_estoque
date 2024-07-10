export interface itemsInterface{
    quantidade: number, 
    quanti_emerg: number, 
    unidade: number, 
    img: string | null, 
    fornecedor: string, 
    descricao: string
}

export const useMetallurgy = defineStore('metallurgy', {
    state: () =>({}), 
    actions:{
        async createMetallurgy(id:number, item: any){
           const {data, error} = await useFetch( `metallurgy/create/${id}`, {
                method: 'post', 

           })
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

           }

        },
    }

})
