import { ADD_TO_PRODUCT, INCREMENT } from "../constants/productConstant"


export const addToProduct = (details) => {
    return {
        type: ADD_TO_PRODUCT,
        payload: details,
    }
}

export const increment = () => {
    return {
        type: INCREMENT,
    }
}