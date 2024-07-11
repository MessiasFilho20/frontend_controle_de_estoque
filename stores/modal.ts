export const useModal = defineStore('modal', {
    state: () => ({
        category: false,  
        idCategory: 0, 
        name_category: '',
        createItem: false, 
        updateCategory: false
    })
})