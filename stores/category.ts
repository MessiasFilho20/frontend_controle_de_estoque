export interface categoryInterface {
    name: string
    description: string
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
        async createCategory(category : categoryInterface){
           
            const {data , error} = await useFetch<categoryInterface>('category/create', {
                method: 'post',
                baseURL: useRuntimeConfig().public.backnend, 
                body:{...category}
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
            const {data , error , pending } = await useFetch<showCategory[]>('category/all', {
                method: 'get',
                baseURL: useRuntimeConfig().public.backnend, 
            })
            if (error.value){
                console.log(error.value.data);
            }
            if (data.value){
                this.categories = data.value
            }

            if (pending.value){
                this.getAllCategoryes()
            }

        }
    }
})