import React, { Fragment, useEffect } from 'react'
// import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import { Row, Col, Typography, Button, Modal, Space } from 'antd'
import './CheckOut.css'
import { useDispatch, useSelector } from 'react-redux'
import { getApiChiTietPhongVeAction } from 'redux/action/FilmAction'
import { DAT_GHE, XOA_DANH_SACH_GHE_DANG_DAT } from 'redux/type/FilmType'
import _ from 'lodash'
import { USER_LOGIN } from 'util/setting'
import { Redirect } from 'react-router'
import { datVeAction } from 'redux/action/UserAction'
import HeaderRes from 'components/Header/HeaderRes'

export default function CheckOut(props) {

    const { chiTietPhongVe } = useSelector(state => state.FilmReducer);
    const { danhSachGhe, thongTinPhim } = chiTietPhongVe;
    const { danhSachGheDangDat } = useSelector(state => state.FilmReducer)
    const { userLogin } = useSelector(state => state.UserReducer)
    const dispatch = useDispatch();
    const { Text } = Typography;
    useEffect(() => {
        dispatch(getApiChiTietPhongVeAction(props.match.params.id));
        // console.log('chi tiet phong ve checkout', chiTietPhongVe)
    }, [])

    // console.log('danhSachGhe DD',danhSachGheDangDat)

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/userlogin" />
    }


    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : 'ghe';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : 'ghe';

            //mỗi lần render ra 1 ghế đem ghế so sánh có trong mảng ghế đang đặt hay ko, nếu có thêm CSS
            let classGheDangDat = '';

            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
            if (indexGheDD !== -1) {
                classGheDangDat = 'gheDangDat'
            }


            return <Fragment key={index}>
                <button onClick={() => {
                    const action = {
                        type: DAT_GHE,
                        ghe: ghe
                    };
                    dispatch(action)
                }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}>{ghe.stt}</button>

                {(index + 1) % 16 === 0 ? <br /> : ''}

            </Fragment>

        })
    }


    return (
        <div className='checkOut'>
            <HeaderRes />
            <div style={{ margin: '100px 0' }}>
                <Row justify="center" align="middle">
                    <Col xs={24} sm={24} md={24} lg={16} style={{ textAlign: 'center' }}>
                        <img src="https://tix.vn/app/assets/img/icons/screen.png" alt="..." width='100%' />
                        <br />
                        {renderGhe()}
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} >
                        <div style={{ textAlign: 'center', fontSize: '50px' }}>
                            <Text type="success" >{danhSachGheDangDat.reduce((tongTien, gheDD, index) => {
                                return tongTien += gheDD.giaVe
                            }, 0).toLocaleString()} VND</Text>
                        </div>
                        <div className="checkOut__text">
                            <p>Tên Phim: {thongTinPhim?.tenPhim}</p>
                            <p>Địa điểm: {thongTinPhim?.diaChi}</p>
                            <p>Ngày Chiếu: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</p>
                            <p>Rạp: {thongTinPhim?.tenRap}</p>
                        </div>
                        <div className="checkOut__thongTin">
                            <Row>
                                <Col span={16}>
                                    {/* {
                                        console.log(_.sortBy(danhSachGheDangDat,['stt']),'sort')
                                    } */}
                                    <p style={{ fontWeight: 600 }}>Ghế: {danhSachGheDangDat.sort((a, b) => a.stt - b.stt).map((gheDD, index) => {
                                        return <span key={index} style={{ color: 'red', fontWeight: '600' }}> {gheDD.stt} </span>
                                    })}</p>
                                </Col>
                                <Col span={8}>
                                    <p style={{ color: 'red', fontWeight: '600' }}>{danhSachGheDangDat.reduce((tongTien, gheDD, index) => {
                                        return tongTien += gheDD.giaVe
                                    }, 0).toLocaleString()} VND</p>
                                </Col>
                            </Row>
                            <p style={{ fontWeight: '600' }}>Email: {userLogin.email}</p>

                            <p style={{ fontWeight: '600' }}>Phone: {userLogin.soDT}</p>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <Button className="checkOut__btn" type="primary" primary onClick={() => {
                                let thongTinDatVe = {

                                    "maLichChieu": props.match.params.id,
                                    "danhSachVe": danhSachGheDangDat,
                                    "taiKhoanNguoiDung": userLogin.taiKhoan
                                }
                                // console.log('thongTinDatVe',thongTinDatVe)
                                dispatch(datVeAction(thongTinDatVe))

                                // ========= modal success
                                Modal.success({
                                    content: `Đặt Vé Thành Công`
                                });

                            }}>ĐẶT VÉ</Button>
                            <Button className="checkOut__btn" danger style={{ marginLeft: '20px' }} onClick={() => {
                                const action = {
                                    type: XOA_DANH_SACH_GHE_DANG_DAT
                                }
                                dispatch(action)
                            }}>HỦY</Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    )
}
