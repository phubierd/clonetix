import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Row, Col, Typography } from 'antd';
import './Footer.css';




export default function Footer() {
    const { Footer } = Layout;
    const { Title, Link } = Typography;
    const arrLogoDoiTac = [
        { hinhAnh: './img/logoIcon/cgv.png' },
        { hinhAnh: './img/logoIcon/bhd.png' },
        { hinhAnh: './img/logoIcon/bt.jpg' },
        { hinhAnh: './img/logoIcon/cinestar.png' },
        { hinhAnh: './img/logoIcon/cnx.jpg' },
        { hinhAnh: './img/logoIcon/dcine.png' },
        { hinhAnh: './img/logoIcon/galaxycine.png' },
        { hinhAnh: './img/logoIcon/megags.png' },
        { hinhAnh: './img/logoIcon/payoo.jpg' },
        { hinhAnh: './img/logoIcon/STARLIGHT.png' },
        { hinhAnh: './img/logoIcon/VCB.png' },
        { hinhAnh: './img/logoIcon/VIETTINBANK.png' },
        { hinhAnh: './img/logoIcon/zalopay_icon.png' },
    ]

    const renderArrLogo = () => {
        return arrLogoDoiTac.map((item, index) => {

        })
    }

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
                            {arrLogoDoiTac.map((item, index) => {
                                return  <>
                                
                                <img src={item.hinhAnh} width="30px" height="30px" key={index} style={{ backgroundColor: '#fff', borderRadius: '50%', marginRight: '15px',marginBottom:'15px' }}/>
                                {(index+1) % 4 === 0 ? <br/> : ''}
                                </>
                                
                            })}
                        </Col>
                    <Col span={6}>
                        <p>MOBILE APP</p>
                        <img src='./img/logoIcon/apple-logo.png' width="25px" height="30px" style={{ marginRight: '5px' }} />
                        <img src='./img/logoIcon/android-logo.png' width="25px" height="30px" />

                    </Col>
                    <Col span={6}>
                        <p>SOCIAL</p>
                        <img src='./img/logoIcon/facebook-logo.png' width="30px" height="30px" style={{ marginRight: '5px' }} />
                        <img src='./img/logoIcon/zalo-logo.png' width="30px" height="30px" />
                    </Col>
                    </Row>


                <hr className="myFooterHr" />

                <Row justify="center">
                    <Col span={4}>
                        <img src='./img/zion-logo.jpg' width="80px" />
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
                        <img src='./img/dathongbao.png' width="130px" height="50px" />
                    </Col>
                </Row>

                </Col>
            </Row>
        </Footer >


    )
}
