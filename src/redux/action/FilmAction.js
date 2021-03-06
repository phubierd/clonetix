import axios from "axios"
import { method } from "lodash"
import { GET_HE_THONG_RAP, SEARCH_FILM, SET_CHI_TIET_PHONG_VE, SET_FILM, SET_FILM_DETAIL } from "redux/type/FilmType"
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


export const themPhimAction = (formData) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyPhim/ThemPhimUploadHinh`,
                method: 'post',
                data: formData,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`
                }
            })
            // console.log('result', result.data)
            window.location.reload();

        } catch (err) {
            console.log(err.response?.data)
        }
    }
}

export const editPhimAction = (formData)=>{
    return async dispatch=>{
        try{
            const result = await axios({
                url:`${DOMAIN}/api/QuanLyPhim/CapNhatPhimUpload`,
                method:'post',
                data:formData,
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem(ACCESSTOKEN)}`
                }
            })
            window.location.reload();
        }catch(err){
            console.log(err.response?.data)
        }
    }
}


export const searchPhimAction = (tenPhim) => {
    const query = tenPhim ? `&tenPhim=${tenPhim}`: ''
    // const query = tenPhim && `&tenPhim=${tenPhim}`
    // if(!tenPhim) => undefined,false,'',
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01${query}`,
                method:'get'
            })
            // console.log('search film',result.data)
            dispatch({
                type: SEARCH_FILM,
                data:result.data
            })

        } catch (err) {
            console.log(err.response?.data)
        }
    }
}

export const xoaPhimAction = (maPhim)=>{
    return async dispatch =>{
        try{
            const result = await axios({
                url:`${DOMAIN}/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
                method:'delete',
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem(ACCESSTOKEN)}`
                }
            })
            // console.log(result.data)
            window.location.reload();
            
        }catch(err){
            console.log(err.response?.data)
        }
    }
}


export const getApiCumRapHeThongAction =(maHeThongRap)=>{
    return async dispatch =>{
        try{
            const result = await axios({
                url:`${DOMAIN}/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
                method:'get',
            })
            // console.log(result.data)
            dispatch({
                type:GET_HE_THONG_RAP,
                data:result.data
            })
        }
        catch(err){
            console.log(err.response?.data)
        }
    }
}

export const postTaoLichChieuAction = (lichChieu)=>{
    return async dispatch=>{
        try{
            const result = await axios({
                url:`${DOMAIN}/api/QuanLyDatVe/TaoLichChieu`,
                method:'post',
                data: lichChieu,
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem(ACCESSTOKEN)}`
                }
            })
            console.log('tao lich chieu action',result.data)

        }catch(err){
            console.log(err.response?.data)
            alert(err.response?.data)
        }
    }
}