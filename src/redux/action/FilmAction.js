import axios from "axios"
import { SET_FILM, SET_FILM_DETAIL } from "redux/type/FilmType"
import { DOMAIN } from "util/setting"




export const getApiFilmAction = () => {
    return async dispatch => {
        try {
            let result = await axios({
                url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
                method: 'get'
            })
            // console.log(result.data)
            dispatch({
                type: SET_FILM,
                dataFilms: result.data
            })
        } catch (err) {
            console.log(err.response?.data)
        }
    }
}

export const getApiFilmDetaiAction = (maFilm) => {
    return async dispatch => {
        try {
            let result = await axios({
                url: `${DOMAIN}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maFilm}`,
                method: 'get'
            })
            // console.log('get api film detail',result.data)
            dispatch({
                type: SET_FILM_DETAIL,
                data: result.data
            })

        } catch (err) {
            console.log(err.response?.data)
        }
    }
}