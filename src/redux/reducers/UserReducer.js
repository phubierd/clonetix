import { DANG_NHAP } from "redux/type/UserType";
import { USER_LOGIN } from "util/setting";


let usLogin = {};

if (localStorage.getItem(USER_LOGIN)) {
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userLogin: usLogin
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case DANG_NHAP: {
            state.userLogin = action.data
            return { ...state }
        }


        default:
            return state
    }
}
