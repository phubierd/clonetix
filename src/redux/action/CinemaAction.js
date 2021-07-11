import axios from "axios"
import { GET_RAP, SET_CINEMA } from "redux/type/CinemaType"
import { DOMAIN } from "util/setting"

export const getCinemaApiAction = () => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyRap/LayThongTinHeThongRap`,
                method: 'get'
            })
            dispatch({
                type: SET_CINEMA,
                data: result.data
            })
            // console.log('result',result.data)
        } catch (error) {
            console.log(error.response?.data)
        }
    }

}

export const getListRapAction = (maHeThongRap)=>{
    return async dispatch =>{
        try{
            const result = await axios({
                url:`${DOMAIN}/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
                method:'get'
            })
            // console.log('ma he thong rap',result.data)
            dispatch({
                type:GET_RAP,
                data:result.data
            })
        }catch(error){
            console.log(error.response?.data)
        }
    }
}