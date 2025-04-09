import { ADD_TRANC, DELETE_TRANC } from "./actions";

const initialState = {
    transactions: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRANC:
        return {...state, transactions: [...state.transactions, action.payload]}
        case DELETE_TRANC:
            return {...state, transactions: state.transactions.filter((id) => id.id !== action.payload)}
        default:
            return state;
    }
}