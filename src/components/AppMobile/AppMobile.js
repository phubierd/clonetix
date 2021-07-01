import React from 'react'
import { Row, Col, Typography, Button, Carousel } from 'antd'
import './AppMobile.css'





export default function AppMobile() {
    const { Title, Link } = Typography;

    const arrSlide = [
        {hinhAnh:'./img/slide1.jpg'},
        {hinhAnh:'./img/slide2.jpg'},
        {hinhAnh:'./img/slide3.jpg'},
        {hinhAnh:'./img/slide4.jpg'},
        {hinhAnh:'./img/slide5.jpg'},
        {hinhAnh:'./img/slide6.jpg'},
        {hinhAnh:'./img/slide7.jpg'},
        {hinhAnh:'./img/slide8.jpg'},
        {hinhAnh:'./img/slide9.jpg'},
        {hinhAnh:'./img/slide10.jpg'},
        {hinhAnh:'./img/slide11.jpg'},
        {hinhAnh:'./img/slide12.jpg'},
        {hinhAnh:'./img/slide13.jpg'},
        {hinhAnh:'./img/slide14.jpg'},
        {hinhAnh:'./img/slide15.jpg'},
        {hinhAnh:'./img/slide16.jpg'},
    ]

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
                                <img src='./img/mobile.png' height="100%" width="195px" className="appMobile__iphone" />
                                <Carousel autoplay dots={false} draggable={true} >
                                {arrSlide.map((item,index)=>{
                                    return <div><img className="appMobile__apps" src={item.hinhAnh} width="185px" height="400px"/></div>
                                })}
                                    {/* <div><img className="appMobile__apps" src='./img/slide1.jpg' width="185px" height="400px"/></div>
                                    <div><img className="appMobile__apps" src='./img/slide2.jpg' width="185px" height="400px" /></div>
                                    <div><img className="appMobile__apps" src='./img/slide3.jpg' width="185px" height="400px" /></div> */}

                                </Carousel>
                            </div>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
