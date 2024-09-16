export const useModal = defineStore('modal', {
    state: () => ({
        login: false,
        category: false,
        edit_user: false,   
        idCategory: 0, 
        idItem: 0,
        user_id: 0,
        name_category: '',
        createItem: false, 
        editItems:false,
        updateCategory: false, 
        removeItem: false,
        informItems: {  name: '',  quantidade: '' ,itemId: ''},
        menuadmin: false,
    })
})