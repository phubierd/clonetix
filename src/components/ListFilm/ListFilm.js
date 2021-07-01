import React, { useEffect, useState } from 'react'
import { Row, Col, Divider, Select, Button, Space, Card, Rate, Typography, Carousel  } from 'antd';
import './ListFilm.css'
import { useDispatch, useSelector } from 'react-redux';
import { getApiFilmAction } from 'redux/action/FilmAction';

export default function ListFilm() {

    const { arrFilm } = useSelector(state => state.FilmReducer)
    const dispatch = useDispatch();

    const { Option } = Select;
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const { Meta } = Card;
    const { Title } = Typography;

    const onChange = (a, b, c) => {
        console.log(a, b, c)
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
                <Col span={16} align="center">
                    <Space size="large">
                        <span><Title type="danger" strong="true" level={2}>Đang Chiếu</Title></span>
                        <span><Title strong="true" level={3} >Sắp Chiếu</Title></span>


                    </Space>
                </Col>
            </Row>


            <Carousel afterChange={onChange} dots={false} draggable={true}>
                <div>
                    <Row justify="center" orientation="center" align="center">
                        <Col span={16} align="center">


                            <div className="site-card-wrapper">
                                <Row gutter={16}>
                                {arrFilm.map((film,index)=>{
                                    return <Col span={6} key={index}>
                                        <Card className="cardListFilm" bordered={false} hoverable cover={<img alt={film.biDanh} src={film.hinhAnh} loading={true} width='215px' height='400px'/>}>
                                            <div className="listFilm__overLay" />
                                            <img className="listFilm__play" src='./img/play-video.png' />
                                            <div className="listFilm__rate">
                                                <span className="listFilm__text">{film.danhGia} </span>
                                                <Rate className="listFilm__star" disabled={true} defaultValue={5} style={{ color: '#FB4226' }} />
                                            </div>
                                            <Meta title={film.tenPhim} description={(film.moTa).length > 50 ? (film.moTa).substring(0,50)+'...' :(film.moTa)} />
                                            
                                        </Card>
                                    </Col>
                                })}
                                </Row>
                            </div>
                        </Col>

                    </Row>
                </div>


                <div>
                    <Row justify="center" orientation="center" align="center">
                        <Col span={16} align="center">
                            <div className="site-card-wrapper">
                                <Row gutter={16}>
                                    <Col span={6} >
                                        <Card className="cardListFilm" bordered={false} hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" loading={true} />}>
                                            <div className="listFilm__overLay" />
                                            <img className="listFilm__play" src='./img/play-video.png' />
                                            <Meta title="Trạng Tí Phiêu Lưu Ký ádădấdcăẻcăewe" description="100 phút" />
                                            {/* title xài if nếu dài hơn bn ký tự thì br */}
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card bordered={false} hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card bordered={false} hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card bordered={false} hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                    </Row>
                </div>
            </Carousel>
        </>
    )
}
