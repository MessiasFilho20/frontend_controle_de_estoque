export default defineNuxtRouteMiddleware( async (to, from) =>{
    const use_user = useUser()  
    const adminRestrictedPages = ['/users', '/register', '/orders']
    if (!use_user.isAuthenticated){
        await use_user.getuser()  
        return navigateTo('login')
    }

    if (use_user.user.role === 'users' && to.path !== '/'){
        return navigateTo('/nonexixte')
    }

    if (use_user.user.role !=='admin' && to.path.startsWith('/admin') ){
        return navigateTo('/nonexixte')
        
    }
 
    if (use_user.user.role !== 'admin' && adminRestrictedPages.includes(to.path)) {
        return navigateTo('/unauthorized') 
      }

})