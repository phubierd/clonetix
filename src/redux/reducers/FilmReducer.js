import { SET_FILM } from "redux/type/FilmType"

const initialState = {
    arrFilm: [],
    arrPages:[],
}

export const FilmReducer = (state = initialState, action) => {
    switch (action.type) {

        // case SET_FILM:{
        //     state.arrFilm = action.dataFilms
        //     return {...state}
        // }
        case SET_FILM:{
            state.arrFilm = action.dataFilms
            return {...state}
        }

        default:
            return state
    }
}
