import { ActionTypes } from "../contants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: products,
    }
}

export const setSelectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const searchProducts = (searchData, data) => {
    return {
        type: ActionTypes.SEARCH_PRODUCT,
        payload: {
            updatedData: searchData === "" ? data : data.filter(item => item.title.toLowerCase().includes(searchData.toLowerCase()))
        },
    }
}