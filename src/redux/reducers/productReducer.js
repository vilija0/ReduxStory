import { type } from "@testing-library/user-event/dist/type";
import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    console.log("payload", payload)
    console.log(state)
    console.log(type)
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }

        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}