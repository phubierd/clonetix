import { GET_RAP, SET_CINEMA } from "redux/type/CinemaType"

const initialState = {
    arrCinema: [],
    arrRap: []
}

export const CinemaReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CINEMA: {
            state.arrCinema = action.data
            return { ...state }
        }
        case GET_RAP: {
            state.arrRap = action.data
            return { ...state }
        }

        default: {
            return state
        }
    }
}
