import { DAT_GHE, SET_CHI_TIET_PHONG_VE, SET_FILM, SET_FILM_DETAIL, XOA_DANH_SACH_GHE_DANG_DAT } from "redux/type/FilmType"

const initialState = {
    arrFilm: [],
    thongTinChiTiet: [],
    chiTietPhongVe: [],
    danhSachGheDangDat: [
        // {
        //     daDat: false,
        //     giaVe: 75000,
        //     loaiGhe: "Thuong",
        //     maGhe: 76520,
        //     maRap: 632,
        //     stt: "160",
        //     taiKhoanNguoiDat: null,
        //     tenGhe: "160"
        // },
        // {
        //     daDat: false,
        //     giaVe: 75000,
        //     loaiGhe: "Thuong",
        //     maGhe: 76519,
        //     maRap: 632,
        //     stt: "159",
        //     taiKhoanNguoiDat: null,
        //     tenGhe: "159"
        // }
    ],

}

export const FilmReducer = (state = initialState, action) => {
    // console.log(state,action,'thongTinChiTiet State')
    switch (action.type) {
        case SET_FILM: {
            state.arrFilm = action.dataFilms
            return { ...state }
        }
        case SET_FILM_DETAIL: {
            state.thongTinChiTiet = action.data;
            return { ...state }
        }
        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.data
            return { ...state }
        }
        case DAT_GHE: {
            const danhSachGheDangDatClone = [...state.danhSachGheDangDat];

            //tìm ghế có bị trùng ko? nếu có thì xóa ra, chưa có thì add vào
            let index = danhSachGheDangDatClone.findIndex(gheDD => gheDD.maGhe === action.ghe.maGhe);
            if (index != -1) {
                danhSachGheDangDatClone.splice(index, 1)
            } else {
                danhSachGheDangDatClone.push(action.ghe)
            }

            state.danhSachGheDangDat = danhSachGheDangDatClone;
            return { ...state }
        }
        case XOA_DANH_SACH_GHE_DANG_DAT: {
            state.danhSachGheDangDat = [];
            return { ...state }
        }

        default:
            return { ...state }
    }
}
