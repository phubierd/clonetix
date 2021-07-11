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
import { DANG_NHAP } from "redux/type/UserType"

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

