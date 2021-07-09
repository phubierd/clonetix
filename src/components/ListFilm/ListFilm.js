import React, { useEffect, useState } from 'react'
import { Row, Col, Select, Button, Card, Rate, Tabs, Divider } from 'antd';
import './ListFilm.css'
import { useDispatch, useSelector } from 'react-redux';
import { getApiFilmAction } from 'redux/action/FilmAction';
import { NavLink } from 'react-router-dom';

export default function ListFilm(props) {

    const { arrFilm } = useSelector(state => state.FilmReducer)

    const dispatch = useDispatch();

    const { Option } = Select;
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const { Meta } = Card;
    const { TabPane } = Tabs;

    const onChange = (a, b, c) => {
        console.log(a, b, c)
    }


    const callback = (key) => {
        console.log(key);
    }

    useEffect(() => {
        dispatch(getApiFilmAction())
        // console.log(arrFilm)
    }, [])

    return (
        <>
            <Row justify="center" orientation="center" align="center">
                <Col span={16} align="center">
                    <Divider orientation="center">
                        <Select defaultValue="1" style={{ width: 300 }} onChange={handleChange}>
                            <Option value="1">Chọn Phim</Option>
                            <Option value="2">Trạng Tí Phiêu Lưu Ký</Option>
                            <Option value="3">Lật Mặt: 48h</Option>
                            <Option value="4">Thiên Thần Hộ Mệnh - The Guardian (C18)</Option>
                            <Option value="5">Detective Conan: Scarlet Bullet - Thám Tử Lừng Danh Conam: Viên Đạn Đỏ - C13</Option>
                            <Option value="6">Người Nhân Bản - Seobok (C16)</Option>
                            <Option value="7">Bàn Tay Diệt Quỷ - Evil Expeller (C16)</Option>

                        </Select>
                        <Select defaultValue="1" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="1">Rạp</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                        <Select defaultValue="1" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="1">Ngày Chiếu</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                        <Select defaultValue="1" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="1">Suất Chiếu</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                        <Button className="listFilm-btn" type="primary" align="center">
                            MUA VÉ NGAY
                        </Button>


                    </Divider></Col>

            </Row>

            <Row justify="center" >
                <Col span={16} align="center" justify="center">
                    <Tabs defaultActiveKey="1" onChange={callback} className="listFilm">
                        <TabPane tab="Đang Chiếu" key="1" >
                            <div className="site-card-wrapper">
                                <Row gutter={16}>
                                    {arrFilm.splice(5, 12).map((film, index) => {
                                        return <Col span={6} key={index}>
                                            <Card className="cardListFilm" bordered={false} hoverable cover={<img alt={film.biDanh} src={film.hinhAnh} loading={true} width='215px' height='400px' />}>
                                                <div className="listFilm__overLay" />
                                                <img className="listFilm__play" src='./img/play-video.png' />
                                                <div className="listFilm__rate">
                                                    <span className="listFilm__text">{film.danhGia} </span>
                                                    <br />
                                                    <Rate className="listFilm__star" disabled={true} allowHalf value={(film.danhGia) / 2} style={{ color: '#FB4226' }} />
                                                </div>
                                                <Meta title={film.tenPhim} description={(film.moTa).length > 50 ? (film.moTa).substring(0, 50) + '. . .' : (film.moTa)} />
                                                <div className="ListFilm__datVe">
                                                    <NavLink to={`/filmdetail/${film.maPhim}`}>
                                                        <Button type="primary" danger size="large" style={{ width: '100%' }}>
                                                            ĐẶT VÉ
                                                        </Button>
                                                    </NavLink>
                                                    {/* <Button type="primary" danger href="#" size="large" style={{ width: '100%' }}>
                                                        <NavLink to={`/filmdetail/${film.maPhim}`}>ĐẶT VÉ</NavLink>
                                                    </Button> */}
                                                    {/* <NavLink to={`/filmdetail/${film.maPhim}`}>DAT VE</NavLink> */}
                                                </div>

                                            </Card>
                                        </Col>
                                    })}
                                </Row>
                            </div>
                        </TabPane>
                        <TabPane tab="Sắp Chiếu" key="2">
                            <div className="site-card-wrapper">
                                <Row gutter={16}>
                                    {arrFilm.splice(24, 12).map((film, index) => {
                                        return <Col span={6} key={index}>
                                            <Card className="cardListFilm" bordered={false} hoverable cover={<img alt={film.biDanh} src={film.hinhAnh} loading={true} width='215px' height='400px' />}>
                                                <div className="listFilm__overLay" />
                                                <img className="listFilm__play" src='./img/play-video.png' />
                                                <div className="listFilm__rate">
                                                    <span className="listFilm__text">{film.danhGia} </span>
                                                    <br />
                                                    <Rate className="listFilm__star" disabled={true} value={(film.danhGia) / 2} style={{ color: '#FB4226' }} />
                                                </div>
                                                <Meta title={film.tenPhim} description={(film.moTa).length > 50 ? (film.moTa).substring(0, 50) + '...' : (film.moTa)} />
                                                <div className="ListFilm__datVe">
                                                    <Button type="primary" danger href="#" size="large" style={{ width: '100%' }}>
                                                        ĐẶT VÉ
                                                    </Button>
                                                </div>
                                            </Card>
                                        </Col>
                                    })}
                                </Row>
                            </div>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </>
    )
}
