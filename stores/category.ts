export interface categoryInterface {
    name: string
}
export interface showCategory extends categoryInterface{
    id: number
}
export const useCategory = defineStore('category', {
    state: () => ({
        categories : [] as showCategory[], 
        category: {} as categoryInterface
    }), 
    actions: {
        async createCategory(name :string){
           
            const {data , error} = await useFetch<categoryInterface>('category/create', {
                method: 'post',
                baseURL: useRuntimeConfig().public.backnend, 
                body:{name}
            })
            if (error.value){
                console.log(error.value.data);
                
            }
            if (data.value){
                this.category = data.value
                this.getAllCategoryes()
            }
        }, 

        async getAllCategoryes() {
            const {data , error} = await useFetch<showCategory[]>('category/all', {
                method: 'get',
                baseURL: useRuntimeConfig().public.backnend, 
            })
            if (error.value){
                console.log(error.value.data);
            }
            if (data.value){
                this.categories = data.value
                
            }

        }
    }
})