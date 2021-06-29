import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Row, Col, Typography } from 'antd';
import './Footer.css';
import zionLogo from 'asset/img/zion-logo.jpg'
import daThongBao from 'asset/img/dathongbao.png'



export default function Footer() {
    const { Footer } = Layout;
    const { Title, Text, Link } = Typography
    return (

        <Footer className="myFooter">
            <Row justify="center">
                <Col span={16} >
                    <Row>
                        <Col span={6}>
                            <p>TIX</p>
                            <Row>
                                <Col span={12}>
                                    <p>FAQ</p>
                                    <p>Brand Guidelines</p>
                                </Col>
                                <Col span={12}>
                                    <p>Thỏa thuận sử dụng</p>
                                    <p>Chính sách bảo mật</p>
                                </Col>
                            </Row>

                        </Col>
                        <Col span={6}>
                            <p>ĐỐI TÁC</p>

                        </Col>
                        <Col span={6}>
                            <p>MOBILE APP</p>
                            <img src='../src/asset/img/logoIcon/apple-logo.png'/>
                            
                        </Col>
                        <Col span={6}>
                            <p>SOCIAL</p>
                        </Col>
                    </Row>


                    <hr className="myFooterHr"/>

                    <Row justify="center">
                        <Col span={4}>
                            <img src={zionLogo} width="80px" />
                        </Col>
                        <Col span={16}>
                            <Title level={4}>
                                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
                            </Title>
                            <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.
                            </p>
                            <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
                            <p>đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                            </p>
                            <p>Số Điện Thoại (Hotline): 1900 545 436</p>
                            <p>Email: <Link >support@tix.vn</Link></p>
                        </Col>
                        <Col span={4}>
                            <img src={daThongBao} width="130px" height="50px" />
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Footer>


    )
}
