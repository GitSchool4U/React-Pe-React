import { ADD_TO_PRODUCT, INCREMENT } from '../constants/productConstant'

const initialState = {
    products: [],
    count: [],
}

export const productReducer = (state = initialState, action) => {
    if (action.type === ADD_TO_PRODUCT) {
        return {
            products: [...state.products, action.payload]
        };
    } if (action.type === INCREMENT) {
        return {
            ...state,
            count: state.count + 1
        }
    } else {
        return state;
    }
}