
export interface userInterface{
    nome: string, 
    gmail: string,
    cpf: string, 
    password: string,
    passwordconfirm: string, 
}

export interface userId extends userInterface{
    id: number
    role: string
}

export interface userLogin {
    data: string, 
    password: string 
}


export const useUser = defineStore('userModal',{
    state: () =>({
        user: {} as userId
    }), 
    actions: {
        async createUser(user : userInterface){
            const {data, error} = await useFetch('user/create',{
                method: 'post',
                baseURL: useRuntimeConfig().public.backnend, 
                body: {...user}
            })
            if (error.value){

            }
            if (data.value){
                localStorage.setItem('login', String(data.value))
            }
        },
        
        async loginUser(user: userLogin){
            const {data, error} = await useFetch('user/login',{
                method: 'post',
                baseURL: useRuntimeConfig().public.backnend,
                body: {...user}
            })
            if (error.value) return console.log('erro',error.value);
            
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
                data: userId
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
        }
    }
})