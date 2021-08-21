import { ActionTypes } from '../constants/action_types';
import {} from '../actions/productActions';
const initialState = null;
export const productReducer =(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS : 
            state.products[0].title="karthi";
            return state;

        case ActionTypes.SELECTED_PRODUCT:
            return state;

        case ActionTypes.GET_PRODUCTS:
            return {
                products :[
                {
                    id:1,
                    title:"page",
                    category:'programmer'
                },
                {
                    id:2,
                    title:"page",
                    category:'programmer'
                }
            ]
            };
        
        default:
            return state;
    }

}