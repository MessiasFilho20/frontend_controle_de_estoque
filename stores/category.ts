import { metadata } from "@vueuse/core/metadata.cjs"

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
                headers: {Authorization: `Bearer ${localStorage.getItem('login')}`},
                body:{...category}
            })
            if (error.value){
                toastModal().createToast('error',`${error.value.data.message}`,'yellow','info')
                
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
                headers: {Authorization: `Bearer ${localStorage.getItem('login')}`}
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

        },
        async deleteCategory(id:number) {
            const {data, error} = await useFetch(`category/delete/${id}`, {
                method: 'delete', 
                baseURL: useRuntimeConfig().public.backnend, 
            })
            if (error.value){
                console.log(error.value);
            }
            if (data.value){
                
                this.getAllCategoryes()
                
            }
        },
        async getCategoryId(id:number){
            const {data , error  } = await useFetch<categoryInterface>(`category/show/${id}`, {
                method: 'get',
                baseURL: useRuntimeConfig().public.backnend, 
            })
            if (error.value){
                console.log(error.value);
                
            }
            if (data.value){
                this.category = data.value
            }
        }, 
        async updateCategory(id: number , category: categoryInterface){
            const {data, error }  = await useFetch(`category/update/${id}`,{
                method: 'put', 
                baseURL: useRuntimeConfig().public.backnend, 
                body: {...category}
            })
            if (error.value){
                toastModal().createToast('Error','Error ao atualizar categoria','red','error')
            }
            if (data.value){
                toastModal().createToast('Sucesso','Categoria atualizada','green','success')
                useModal().updateCategory = false
                this.getAllCategoryes()
            }
        }
    }
})