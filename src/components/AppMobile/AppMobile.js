import React from 'react'
import { Row, Col, Typography, Button, Carousel } from 'antd'
import './AppMobile.css'
import mobile from 'asset/img/mobile.png'

import slide1 from 'asset/img/slide1.jpg'
import slide2 from 'asset/img/slide2.jpg'
import slide3 from 'asset/img/slide3.jpg'


export default function AppMobile() {
    const { Title, Text, Link } = Typography;

    return (

        <div className="appMobile">
            <Row justify="center" >
                <Col span={16} >
                    <Row justify="center" align="middle" style={{ marginTop: '10%' }}>
                        <Col span={12} >
                            <Title >Ứng dụng tiện lợi dành cho

                                người yêu điện ảnh</Title>
                            <Title level={4}>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</Title>
                            <Title level={4}>
                                <Button danger type="primary" size="large">App miễn phí - Tải về ngay !</Button>
                            </Title>
                            <Title level={4}>TIX có cả hai phiên bản <Link href="#" target="_blank" underline={true}>IOS</Link> & <Link href="#" underline={true} target="_blank">Android</Link></Title>


                        </Col>
                        <Col span={12} align="center">
                            {/* <div className="appMobile__iphone"></div> */}
                            <div className="appMobile__content">
                                <img src={mobile} height="100%" width="195px" className="appMobile__iphone" />
                                <Carousel autoplay dots={false} draggable={true} >
                                    <div><img className="appMobile__apps" src={slide1} width="185px" height="400px"/></div>
                                    <div><img className="appMobile__apps" src={slide2} width="185px" height="400px" /></div>
                                    <div><img className="appMobile__apps" src={slide3} width="185px" height="400px" /></div>

                                </Carousel>
                            </div>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
