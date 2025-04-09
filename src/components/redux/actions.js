export const ADD_TRANC = "ADD_TRANC"
export const DELETE_TRANC = "DELETE_TRANC"

export const addT = (tranc) => ({
    type: ADD_TRANC,
    payload: tranc
})

export const deleteT = (id) => ({
    type: DELETE_TRANC,
    payload: id
})