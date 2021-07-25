import axios from "axios"
import { ACCESSTOKEN, DOMAIN, USER_LOGIN } from "util/setting"






// {
//     "taiKhoan": "string",
//     "matKhau": "string",
//     "email": "string",
//     "soDt": "string",
//     "maNhom": "string",
//     "maLoaiNguoiDung": "string",
//     "hoTen": "string"
//   }

import { history } from "App"
import { DANG_NHAP, GET_USER, THONG_TIN_TAI_KHOAN, TIM_KIEM_USER } from "redux/type/UserType"
import { XOA_DANH_SACH_GHE_DANG_DAT } from "redux/type/FilmType"
import { getApiChiTietPhongVeAction } from "./FilmAction"

export const dangKyAction = (thongTinNguoiDung) => {
    return async dispatch => {
        try {
            let result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/DangKy`,
                method: 'post',
                data: thongTinNguoiDung
            });

            history.push('/')
            console.log('dangky thanh cong', result.data)



        }
        catch (error) {
            console.log(error.response?.data)
        }
    }
}

// thongTinDangNhap:{
//     taiKhoan:'',
//     matKhau:'',
// }
export const dangNhapAction = (thongTinDangNhap) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
                method: 'post',
                data: thongTinDangNhap
            })
            //dua len reducer
            dispatch({
                type: DANG_NHAP,
                data: result.data
            })
            //luu data vao local storage
            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data))

            localStorage.setItem(ACCESSTOKEN, result.data.accessToken)

            //quay lai trang truoc do
            history.goBack();

        } catch (error) {
            console.log(error.response?.data);
            alert(error.response?.data)

        }
    }
}


// {
//     "maLichChieu": 0,
//         "danhSachVe": [
//             {
//                 "maGhe": 0,
//                 "giaVe": 0
//             }
//         ],
//             "taiKhoanNguoiDung": "string"
// }

export const datVeAction = (thongTinDatVe) => {
    return async dispatch => {
        try {
            let result = await axios({
                url: `${DOMAIN}/api/quanlydatve/datve`,
                method: 'post',
                data: thongTinDatVe,

                //phan nay để api xác nhận mình đã đăng nhập rồi
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`
                }
            })
            //goi action xoa ghe
            await dispatch({
                type: XOA_DANH_SACH_GHE_DANG_DAT
            })

            //sau khi dat ve xong goi lai action load lai phong ve
            await dispatch(getApiChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            //goi action khac (maLichChieu => tu page checkout)
            console.log('datveaction', result.data)

        } catch (err) {
            console.log('error', err.resoponse?.data)
        }
    }
}




export const thongTinTaiKhoanAction = (userLogin) => {
    return async dispatch => {
        try {
            // console.log('try')
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
                method: 'post',
                data: userLogin,


            })
            // console.log('thong tin tai khoan',result.data);
            dispatch({
                type: THONG_TIN_TAI_KHOAN,
                data: result.data
            })


        } catch (err) { console.log('errors', err.response?.data) }
    }
}


export const getApiArrUser = () => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
                method: 'get'
            })
            // console.log(result.data)
            dispatch({
                type: GET_USER,
                data: result.data
            })
        } catch (err) {
            console.log(err.response?.data)
        }
    }
}

export const getApiTimKiemAction = (tuKhoa) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${tuKhoa}`,
                method: 'get'
            })
            // console.log('tim kiem action', result.data)
            dispatch({
                type: TIM_KIEM_USER,
                data: result.data
            })

        } catch (err) { console.log(err.response?.data) }
    }
}

export const delApiUserAction = (taiKhoan) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
                method: 'delete',
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem(ACCESSTOKEN)}`
                }
            })
            // console.log('del user action', result.data)
            window.location.reload()
        } catch (err) {
            console.log(err.response?.data)
        }
    }
}