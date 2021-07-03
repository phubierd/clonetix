import React, { Fragment, useEffect } from 'react'
import './FilmDetail.css'
import { useDispatch, useSelector } from 'react-redux'
import { getApiFilmDetaiAction } from 'redux/action/FilmAction'
import { Row, Col } from 'antd'
import ListCinema from 'components/ListCinema/ListCinema'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

export default function FilmDetail(props) {

    const { thongTinChiTiet } = useSelector(state => state.FilmReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getApiFilmDetaiAction(props.match.params.postID))
        console.log('thongTinChiTiet', thongTinChiTiet)
    }, [])

    return (
        
            <div className="filmDetail">
            <Header/>
                <Row justify="center" style={{margin:'30px 0'}}>
                    <Col span={16} align="center">
                        <Row align="middle">
                            <Col span={12}>
                                <img src={thongTinChiTiet?.hinhAnh} width="230px" height="350px"></img>

                            </Col>
                            <Col span={12} style={{textAlign:'start'}}>

                                <h2>Tên Phim: {thongTinChiTiet?.tenPhim}</h2>
                                
                                <h2>Nội Dung Phim:</h2>
                                <p>{thongTinChiTiet?.moTa}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <ListCinema />
                <Footer/>
            </div>

        
    )
}
