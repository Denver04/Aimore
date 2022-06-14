import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant"

// const initialState={
//     cartdata:[]
// }

export default function cartItem(state= [] , action){
    switch(action.type){
        case ADD_TO_CART:
            console.warn("reucer",action);
            return[
                ...state ,
                {cartData:action.data} 
            ]
            case REMOVE_FROM_CART:
            // console.warn("reucer",action);
            state.pop();
            return[
                ...state ,
                // {cartData:action.data} 
            ]
        default:
            return state
    }
}