import React, { useEffect, useState } from 'react'
import { Row, Col, Select, Button, Card, Rate, Tabs, Divider, Modal } from 'antd';
import './ListFilm.css'
import { useDispatch, useSelector } from 'react-redux';
import { getApiFilmAction } from 'redux/action/FilmAction';
import { NavLink } from 'react-router-dom';

export default function ListFilm(props) {

    const { arrFilm } = useSelector(state => state.FilmReducer)
    const [trailer, setTrailer] = useState({});
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    const dispatch = useDispatch();

    const { Option } = Select;
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const { Meta } = Card;
    const { TabPane } = Tabs;

    const onChange = (a, b, c) => {
        // console.log(a, b, c)
    }


    const callback = (key) => {
        // console.log(key);
    }

    // ===========modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    // const showModal = () => {
    //     setIsModalVisible(true);
    // };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleClick = (maPhim) => {
        setIsModalVisible(true);
        const result = arrFilm.find(item => item.maPhim === maPhim)
        // console.log(result)
        setTrailer(result.trailer)
        setIsVideoPlaying(true)
    }

    const handleResetTrailer = () => {
        setIsVideoPlaying(false)
    }

    useEffect(() => {
        dispatch(getApiFilmAction())
        // console.log(arrFilm)
        // console.log('props', props.myRef)
    }, [])

    return (
        <>
            {/* <Row justify="center" orientation="center" align="center">
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

            </Row> */}

            <Row justify="center" id="listFilmID" ref={props.myRef}>
                <Col span={16} align="center" justify="center">
                    <Tabs defaultActiveKey="1" onChange={callback} className="listFilm">
                        <TabPane tab="Đang Chiếu" key="1" >
                            <div className="site-card-wrapper">
                                <Row gutter={16} style={{ justifyContent: 'center' }}>
                                    {arrFilm.slice(2, 18).map((film, index) => {
                                        return <Col key={index} xs={24} sm={24} md={12} lg={6} xl={6}>
                                            <Card className="cardListFilm" bordered={false} hoverable cover={<img alt={film.biDanh} src={film.hinhAnh} loading={true} width='215px' height='400px' alt="..." />}>
                                                <div className="listFilm__overLay" />
                                                <img className="listFilm__play" src='./img/play-video.png' alt="..." onClick={() => { handleClick(film.maPhim) }} />
                                                {
                                                    isVideoPlaying && <Modal title="Trailer" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className='listFilm__modal' afterClose={handleResetTrailer}>
                                                        {/* {console.log('trailer',trailer)} */}
                                                        <iframe width="100%" height="100%" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                                                    </Modal>
                                                }
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
                                    {arrFilm.slice(30, 42).map((film, index) => {
                                        return <Col key={index} xs={24} sm={24} md={12} lg={6} xl={6}>
                                            <Card className="cardListFilm" bordered={false} hoverable cover={<img alt={film.biDanh} src={film.hinhAnh} loading={true} width='215px' height='400px' alt="..." />}>
                                                <div className="listFilm__overLay" />
                                                <img className="listFilm__play" src='./img/play-video.png' alt="..." onClick={() => { handleClick(film.maPhim) }} />
                                                <Modal title="Trailer" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className='listFilm__modal'>
                                                    <iframe width="100%" height="100%" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                                                </Modal>
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
