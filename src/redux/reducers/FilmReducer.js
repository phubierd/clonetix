import { SET_FILM, SET_FILM_DETAIL } from "redux/type/FilmType"

const initialState = {
    arrFilm: [],
    thongTinChiTiet: []

}

export const FilmReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILM: {
            state.arrFilm = action.dataFilms
            return { ...state }
        }
        case SET_FILM_DETAIL: {
            state.thongTinChiTiet = action.data
        }

        default:
            return state
    }
}
