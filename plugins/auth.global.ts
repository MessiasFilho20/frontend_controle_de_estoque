export default defineNuxtPlugin((nuxtApp) => {
  
    addRouteMiddleware('auth', (to, from) => {
        const user = useUser()
        
        console.log(user.userID.nome);
        
        
        // if (user.userID.role === undefined && to.path !== '/login' ) {
           
        //   return navigateTo('/login')
        // }

        if (user.userID.role !== 'users' && user.userID.role !== 'admin') {
          console.log(user.userID.role);
          
        }
    }, { global: true }) 


  })