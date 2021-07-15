import { DANG_NHAP, THONG_TIN_TAI_KHOAN } from "redux/type/UserType";
import { USER_LOGIN } from "util/setting";


let usLogin = {};

if (localStorage.getItem(USER_LOGIN)) {
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userLogin: usLogin,
    thongTinTaiKhoan:[],
}

export const UserReducer = (state = initialState, action) => {
    // console.log(state.userLogin,'userlogin')
    switch (action.type) {

        case DANG_NHAP: {
            state.userLogin = action.data
            return { ...state }
        }
        
        case THONG_TIN_TAI_KHOAN:{
            state.thongTinTaiKhoan = action.data
            return{...state}
        }

        default:
            return state
    }
}
