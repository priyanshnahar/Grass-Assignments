const initialData = {
    list: []
}


const todoReducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_LIST":
        const {id, data} = action.payload;
        return{
            ...state,
            list: [
                ...state.list,
                {
                    id: id,
                    data: data
            }
        ]
        }
        case "DELETE_LIST":
        
        const newList = state.list.filter((elem) => elem.id !== action.id)
        return{
            ...state,
            list: newList
       
        }
        default: return state;
    }
}
    
export default todoReducer;