import axios from "axios"
import { SET_FILM } from "redux/type/FilmType"
import { DOMAIN } from "util/setting"




export const getApiFilmAction = () => {
    return async dispatch  => {
    try {
        let result = await axios ({
            url:`${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
            method:'get'
        })
        console.log(result.data)
        dispatch({
            type:SET_FILM,
            dataFilms:result.data
        })
    } catch (err) {
        console.log(err.response?.data)
    }
}
}
