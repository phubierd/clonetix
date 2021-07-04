import React, { Fragment, useEffect } from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import { Row, Col, Typography, Button } from 'antd'
import './CheckOut.css'
import { useDispatch, useSelector } from 'react-redux'
import { getApiChiTietPhongVeAction } from 'redux/action/FilmAction'


export default function CheckOut(props) {

    const { chiTietPhongVe } = useSelector(state => state.FilmReducer);
    const { danhSachGhe, thongTinPhim } = chiTietPhongVe;
    const dispatch = useDispatch();
    const { Text } = Typography;

    useEffect(() => {
        dispatch(getApiChiTietPhongVeAction(props.match.params.id));
        console.log('chi tiet phong ve checkout', chiTietPhongVe)
    }, [])


    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {
            
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : 'ghe';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : 'ghe';

            return <Fragment key={index}>



                <button disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat}`}>{ghe.stt}</button>

                {(index+1)%16 ===0 ? <br/> :''}

            </Fragment>

        })
    }


    return (
        <div className='checkOut'>
            <Header />
            <div style={{ margin: '100px 0' }}>
                <Row justify="center" align="middle">
                    <Col span={16} style={{ textAlign: 'center' }}>
                        <img src="https://tix.vn/app/assets/img/icons/screen.png" alt="..." />
                        <br />
                        {renderGhe()}
                    </Col>
                    <Col span={8} >
                        <Text type="success">0 đ</Text>
                        <div>
                            <p>Tên Phim: {thongTinPhim?.tenPhim}</p>
                            <p>Địa điểm: {thongTinPhim?.diaChi}</p>
                            <p>Ngày Chiếu: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</p>
                            <p>Rạp: {thongTinPhim?.tenRap}</p>
                        </div>
                        <Row>
                            <Col span={16}>
                                <p>Ghế: </p>
                            </Col>
                            <Col span={8}>
                                $
                            </Col>
                        </Row>
                        <p>Email: </p>

                        <p>Phone: </p>

                        <Button type="primary" danger>Đặt Vé</Button>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    )
}
