import React, { Fragment, useEffect } from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import { Row, Col, Typography, Button } from 'antd'
import './CheckOut.css'
import { useDispatch, useSelector } from 'react-redux'
import { getApiChiTietPhongVeAction } from 'redux/action/FilmAction'
import { DAT_GHE } from 'redux/type/FilmType'
import _ from 'lodash'

export default function CheckOut(props) {

    const { chiTietPhongVe } = useSelector(state => state.FilmReducer);
    const { danhSachGhe, thongTinPhim } = chiTietPhongVe;
    const dispatch = useDispatch();
    const { danhSachGheDangDat } = useSelector(state => state.FilmReducer)
    const { Text } = Typography;

    useEffect(() => {
        dispatch(getApiChiTietPhongVeAction(props.match.params.id));
        console.log('chi tiet phong ve checkout', chiTietPhongVe)
    }, [])

    // console.log('danhSachGhe DD',danhSachGheDangDat)
    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : 'ghe';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : 'ghe';
            
            //mỗi lần render ra 1 ghế đem ghế so sánh có trong mảng ghế đang đặt hay ko, nếu có thêm CSS
            let classGheDangDat = '';

            let indexGheDD = danhSachGheDangDat.findIndex(gheDD=>gheDD.maGhe === ghe.maGhe)
            if (indexGheDD !== -1){
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
            <Header />
            <div style={{ margin: '100px 0' }}>
                <Row justify="center" align="middle">
                    <Col span={16} style={{ textAlign: 'center' }}>
                        <img src="https://tix.vn/app/assets/img/icons/screen.png" alt="..." width='100%' />
                        <br />
                        {renderGhe()}
                    </Col>
                    <Col span={8} >
                        <div style={{ textAlign: 'center', fontSize: '50px' }}>
                            <Text type="success" >{danhSachGheDangDat.reduce((tongTien,gheDD,index)=>{
                                        return tongTien+= gheDD.giaVe
                                    },0).toLocaleString()}đ</Text>
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
                                    <p>Ghế: {danhSachGheDangDat.sort((a,b)=>a.stt-b.stt).map((gheDD, index) => {
                                        return <span key={index} style={{ color: 'red', fontWeight: '600' }}> {gheDD.stt} </span>
                                    })}</p>
                                </Col>
                                <Col span={8}>
                                    <p style={{ color: 'red', fontWeight: '600' }}>{danhSachGheDangDat.reduce((tongTien,gheDD,index)=>{
                                        return tongTien+= gheDD.giaVe
                                    },0).toLocaleString()}$</p>
                                </Col>
                            </Row>
                            <p>Email: </p>

                            <p>Phone: </p>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <Button className="checkOut__btn" type="primary" danger>Đặt Vé</Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    )
}
