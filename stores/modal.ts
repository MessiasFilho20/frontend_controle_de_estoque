export const useModal = defineStore('modal', {
    state: () => ({
        login: false,
        category: false,  
        idCategory: 0, 
        name_category: '',
        createItem: false, 
        editItems:false,
        updateCategory: false, 
        removeItem: false,
        informItems: {  name: '',  quantidade: '' ,itemId: ''},
        menuadmin: false,
    })
})