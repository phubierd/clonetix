import React, { useEffect } from 'react'
import './FilmDetail.css'
import { useDispatch, useSelector } from 'react-redux'
import { getApiFilmDetaiAction } from 'redux/action/FilmAction'
import { Row, Col, Rate } from 'antd'
import ListCinema from 'components/ListCinema/ListCinema'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

export default function FilmDetail(props) {

    const { thongTinChiTiet } = useSelector(state => state.FilmReducer)
    const dispatch = useDispatch();
    

    useEffect(() => {
        const action = getApiFilmDetaiAction(props.match.params.postID);
        dispatch(action)
        console.log('thong tin chi tiet',thongTinChiTiet)


    }, [])

    return (

        <div className="filmDetail">
            <Header />
            <Row justify="center" style={{ margin: '100px 0' }}>
                <Col span={16} align="center">
                    <Row align="middle">
                        <Col span={12}>
                            <img src={thongTinChiTiet?.hinhAnh} width="230px" height="350px"></img>

                        </Col>
                        <Col span={12} style={{ textAlign: 'start' }}>

                            <h2 style={{color:'#5f5139'}}>Tên Phim: {thongTinChiTiet?.tenPhim}</h2>

                            <h2 style={{color:'#5f5139'}}>Nội Dung Phim:</h2>
                            <p>{thongTinChiTiet?.moTa}</p>

                            <h2 style={{color:'#5f5139'}}>Đánh Giá: <Rate disabled allowHalf value={(thongTinChiTiet?.danhGia)/2} /></h2>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div style={{ marginBottom: '50px' }}>
                <h2 style={{ textAlign: 'center',fontSize:'30px', color:'#5f5139' }}>Thông Tin Lịch Chiếu</h2>
                <ListCinema heThongRapChieu={thongTinChiTiet?.heThongRapChieu}/>
            </div>
            <Footer />
        </div>


    )
}
