import { DANG_NHAP, GET_USER, THONG_TIN_TAI_KHOAN, TIM_KIEM_USER } from "redux/type/UserType";
import { USER_LOGIN } from "util/setting";


let usLogin = {};

if (localStorage.getItem(USER_LOGIN)) {
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userLogin: usLogin,
    thongTinTaiKhoan: [],
    arrUser: [],
    arrTimKiemUser: [],
}

export const UserReducer = (state = initialState, action) => {
    // console.log(state.userLogin,'userlogin')
    switch (action.type) {

        case DANG_NHAP: {
            state.userLogin = action.data
            return { ...state }
        }

        case THONG_TIN_TAI_KHOAN: {
            state.thongTinTaiKhoan = action.data
            return { ...state }
        }

        case GET_USER: {
            state.arrUser = action.data
            return { ...state }
        }

        case TIM_KIEM_USER: {
            state.arrTimKiemUser = action.data
            return { ...state }
        }
        default:
            return state
    }
}
