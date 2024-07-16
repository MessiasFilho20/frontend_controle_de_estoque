export interface userInterface{
    nome: string, 
    gmail: string,
    cpf: string, 
    password: string,
    passwordconfirm: string
}


export const useUser = defineStore('userModal',{
    state: () =>({

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
        }
    }
})