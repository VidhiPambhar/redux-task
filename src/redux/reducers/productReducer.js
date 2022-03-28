import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: [],
    filteredFoodData: []

};
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCT:
            return {...state, products: action.payload };
            // return state;

        case ActionTypes.SEARCH_PRODUCT:
            return {...state, filteredFoodData: action.payload.updatedData }

        default:
            return state;
    }
};
export const selectedProductReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...action.payload };
            // return state;

        default:
            return state;
    }
};
export const searchProductReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_PRODUCT:
            return {...state, ...action.payload };
            // return state;

        default:
            return state;
    }
};