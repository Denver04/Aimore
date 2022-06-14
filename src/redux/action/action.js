import { ADD_TO_CART , REMOVE_FROM_CART } from "../constant";

export const Add =(data)=>{
console.warn(data);
    return{
        type:ADD_TO_CART,
        data:data
    }
}

export const Remove =()=>{
    return{
        type:REMOVE_FROM_CART,
    }
}