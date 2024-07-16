export const useModal = defineStore('modal', {
    state: () => ({
        login: false,
        category: false,  
        idCategory: 0, 
        name_category: '',
        createItem: false, 
        updateCategory: false
    })
})