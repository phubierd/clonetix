import axios from "axios"
import { SET_CHI_TIET_PHONG_VE, SET_FILM, SET_FILM_DETAIL } from "redux/type/FilmType"
import { ACCESSTOKEN, DOMAIN } from "util/setting"




export const getApiFilmAction = () => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
                method: 'get'
            })
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
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maFilm}`,
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


export const getApiChiTietPhongVeAction = (maLichChieu) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'get'
            })
            // console.log('lay danh sach phong ve',result.data)
            dispatch({
                type: SET_CHI_TIET_PHONG_VE,
                data: result.data
            })
        } catch (err) {
            console.log(err.response?.data)
        }
    }
}


export const themPhimAction = (formData)=>{
    return async dispatch =>{
        try{
            const result = await axios({
                url:`${DOMAIN}/api/QuanLyPhim/ThemPhim`,
                method:'post',
                data:formData,
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem(ACCESSTOKEN)}`
                }
            })
            console.log('result',result.data)
        }catch(err){
            console.log(err.response?.data)
        }
    }
}

