
export interface userInterface{
    nome: string, 
    gmail: string,
    cpf: string, 
    password: string,
    passwordconfirm: string, 
}
export interface userUpdate{
    nome: string, 
    gmail: string,
    cpf: string, 
    role: string
}
export interface userInterfaceGetAll extends userUpdate{
    id: number
}

export interface userLogin {
    data: string, 
    password: string 
}

export const useUser = defineStore('userModal',{
    state: () =>({
        user: {} as userInterfaceGetAll ,
        userID: {} as userInterfaceGetAll ,
        users: [] as userInterfaceGetAll[]
    }), 
    actions: {

        async createUser(user : userInterface){
            const {data, error} = await useFetch('user/create',{
                method: 'post',
                baseURL: useRuntimeConfig().public.backnend, 
                body: {...user}
            })
            if (error.value){
                toastModal().createToast('Error',String(error.value.message),'yellow',"info")
            }
            if (data.value){
                // localStorage.setItem('login', String(data.value))
            }
        },
        async loginUser(user: userLogin){
            const {data, error} = await useFetch('user/login',{
                method: 'post',
                baseURL: useRuntimeConfig().public.backnend,
                body: {...user}
            })
            if (error.value){
                toastModal().createToast('Error',String(error.value.data.message),"red","error")
            }
            
            if (data.value){
                localStorage.setItem('login',String(data.value))
                
                await this.getuser()
                navigateTo({
                    name: 'index'
                })
                
            }
           
        },
        async getuser(){
            interface user {
                data: userInterfaceGetAll
            }
            const {data, error, pending }  = await useFetch<user>('user/getuser', {
                method: 'get', 
                baseURL: useRuntimeConfig().public.backnend, 
                headers: {Authorization: `Bearer ${localStorage.getItem('login')}`}
                
            })
            if (error.value){
                console.log(error.value.data);
            }
            if (data.value){
                
                const {data: userId} = data.value
                this.user = userId
            
            }
            if (pending.value){
                this.getuser()
            }
        },
        async getUserById(id: number) {
            interface userData {
                data: userInterfaceGetAll
            }

            const {data, error }  = await useFetch<userData>(`user/get/${id}`, {
                method: 'get', 
                baseURL: useRuntimeConfig().public.backnend, 
                headers: {Authorization: `Bearer ${localStorage.getItem('login')}`}
            })
            if (error.value){
                console.log(error.value.data);
            }
            if (data.value){
                this.userID = data.value.data
            }

        }, 

        async updateUser(id: number , user: userUpdate ){
            const {error, data} = await useFetch<userUpdate>(`user/update/${id}`, {
                method: 'put', 
                baseURL: useRuntimeConfig().public.backnend, 
                headers: {Authorization: `Bearer ${localStorage.getItem('login')}`},
                body: {...user}
            })
            if(error.value){
                toastModal().createToast('Error',`${error.value.data.message}`,'red','error')
            }
            if(data.value){
                toastModal().createToast('sucesso','Usuario atualizado', 'green','success')
                useModal().edit_user = false
                this.getAllUsers()
            }
        },

        async getAllUsers(){
            interface allusers{
                datas: userInterfaceGetAll[] 
            }
            const {data, error, pending}  = await useFetch<allusers>(`user/all`, {
                method: 'get', 
                baseURL: useRuntimeConfig().public.backnend, 
                headers: {Authorization: `Bearer ${localStorage.getItem('login')}`}
            })

            if (error.value){
                console.log(error.value.data);
            }
            if (data.value){
                this.users = data.value.datas
        
            }
        },
        async deleteUserById(id: number){
            const {data, error} = await useFetch(`user/delete/${id}`, {
                method: 'delete', 
                baseURL: useRuntimeConfig().public.backnend, 
                headers: {Authorization:`Bearer ${localStorage.getItem('login')}`}
            })
            if (error.value){

            }
            if (data.value){
                this.getAllUsers()
            }
        }
    }
})