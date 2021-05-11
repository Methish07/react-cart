export const Reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cart:state.cart.concat(action.payload)
            };
            case 'REMOVE_FROM_CART':
                return{
                    ...state,
                    cart:state.cart.filter(i=>i.id!==action.payload.id)
                };
            case 'ADD_USER':
                return{
                    ...state,
                    user:state.user.concat(action.payload)
                }
                default: return state;
    }
}
 export const initialState={
    cart:[],
    user:[]
}