export interface itemsInterface{
    quantidade: number, 
    quanti_emerg: number, 
    img: string | null, 
    fornecedor: string, 
    tamanho: number
    descricao: string,
}

export interface updateItems extends itemsInterface{
    id: number
}

export interface itemsID extends itemsInterface {
    id: number | null
    created_at: string, 
    updated_at: string
}

export const useMetallurgy = defineStore('metallurgy', {
    state: () =>({
        all : [] as itemsID [], 
        item: {} as itemsInterface,
        emergne : false
    }), 
    actions:{
        async createMetallurgy(id:number, item: itemsInterface){
           const {data, error} = await useFetch(`metallurgy/create/${id}`, {
                method: 'post', 
                baseURL: useRuntimeConfig().public.backnend, 
                headers: {Authorization: `Bearer ${localStorage.getItem('login')}`},
                body: {...item}
           })
           if (error.value){
            toastModal().createToast('Error', String(error.value.data.message),'yellow',"warning")
           }
           if(data.value){
            await this.showAllMelorryId(useModal().idCategory)
            useAlerts().alerteCreateIten()
           }
        },

        async getMetallurgy(id: number){
           const {data, error} = await useFetch<itemsInterface>(`metallurgy/show/${id}`, {
            method: 'get', 
            baseURL: useRuntimeConfig().public.backnend
           })
           if (error.value){
            console.log(error.value);
           }
           if (data.value){
            
            this.item = {... data.value, quantidade: Math.round(data.value.quantidade)}
           
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
                    this.emergne = this.all.some(item => item.quantidade <= item.quanti_emerg)

               }
        },

        async updateItemsMellury (itemid:number, item: updateItems ){
            const {data, error} = await useFetch<itemsID>(`metallurgy/update/${itemid}`,{
                method: 'put', 
                baseURL: useRuntimeConfig().public.backnend, 
                headers: {Authorization: `Bearer ${localStorage.getItem('login')}`},
                body: {...item}
            })
            if (error.value){
               
                toastModal().createToast('Error','Erro ao Editar Iten','red',"error")
            }
            if (data.value){
               this.showAllMelorryId(useModal().idCategory)
               toastModal().createToast('Sucesso','Sucesso ao Editar Iten','green',"success")
               useModal().editItems = false
            }
        }, 

        async deleteItemsMallury(id : number){
            const {data, error} = await useFetch<itemsID>(`metallurgy/delete/${id}`, {
                method: 'delete', 
                baseURL:useRuntimeConfig().public.backnend, 
                headers: {Authorization: `Bearer ${localStorage.getItem('login')}`},
            })

            if (error.value){

            }
            if (data.value){
                this.showAllMelorryId(useModal().idCategory)
            }
        }   
    }

    
})
