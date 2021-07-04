import { SET_CHI_TIET_PHONG_VE, SET_FILM, SET_FILM_DETAIL } from "redux/type/FilmType"

const initialState = {
    arrFilm: [],
    thongTinChiTiet: [],
    chiTietPhongVe: []

}

export const FilmReducer = (state = initialState, action) => {
    // console.log(state,action,'thongTinChiTiet State')
    switch (action.type) {
        case SET_FILM: {
            state.arrFilm = action.dataFilms
            return { ...state }
        }
        case SET_FILM_DETAIL: {
            state.thongTinChiTiet = action.data;
            return { ...state }
        }
        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.data
            return { ...state }
        }

        default:
            return { ...state }
    }
}
