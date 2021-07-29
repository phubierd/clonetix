import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Row, Col, Typography } from 'antd';
import './Footer.css';




export default function Footer(props) {
    const { Footer } = Layout;
    const { Title, Link } = Typography;
    const arrLogoDoiTac = [
        { hinhAnh: 'https://tix.vn/app/assets/img/icons/cgv.png' },
        { hinhAnh: 'https://tix.vn/app/assets/img/icons/bhd.png' },
        { hinhAnh: 'https://tix.vn/app/assets/img/icons/galaxycine.png' },
        { hinhAnh: 'https://tix.vn/app/assets/img/icons/cinestar.png' },
        { hinhAnh: 'https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png' },
        { hinhAnh: 'https://tix.vn/app/assets/img/icons/cnx.jpg' },
        { hinhAnh: 'https://tix.vn/app/assets/img/icons/dcine.png' },
        { hinhAnh: 'https://tix.vn/app/assets/img/icons/bt.jpg' },
        { hinhAnh: 'https://tix.vn/app/assets/img/icons/megags.png' },
        { hinhAnh: 'https://tix.vn/app/assets/img/icons/payoo.jpg' },
        { hinhAnh: 'https://tix.vn/app/assets/img/icons/STARLIGHT.png' },
        { hinhAnh: 'https://tix.vn/app/assets/img/icons/VCB.png' },
        { hinhAnh: 'https://tix.vn/app/assets/img/icons/VIETTINBANK.png' },
        { hinhAnh: 'https://tix.vn/app/assets/img/icons/zalopay_icon.png' },
        { hinhAnh: 'https://tix.vn/app/assets/img/icons/123go.png' },
        { hinhAnh: 'https://tix.vn/app/assets/img/icons/laban.png' },
    ]

    return (

        <Footer className="myFooter">
            <Row justify="center">
                <Col span={16} >
                    <Row style={{textAlign:'center'}}>
                        <Col xs={24} md={12} lg={12} xl={6}>
                            <p>TIX</p>
                            <Row>
                                <Col xs={24} sm={24} lg={12}>
                                    <p>FAQ</p>
                                    <p>Brand Guidelines</p>
                                </Col>
                                <Col xs={24} sm={24} lg={12}>
                                    <p>Thỏa thuận sử dụng</p>
                                    <p>Chính sách bảo mật</p>
                                </Col>
                            </Row>

                        </Col>
                        <Col xs={24} md={12} lg={12} xl={6}>
                            <p>ĐỐI TÁC</p>
                            {arrLogoDoiTac.map((item, index) => {
                                return  <>
                                
                                <img src={item.hinhAnh} width="30px" height="30px" key={index} style={{ backgroundColor: '#fff', borderRadius: '50%', marginRight: '15px',marginBottom:'15px' }} alt="..."/>
                                {(index+1) % 4 === 0 ? <br/> : ''}
                                </>
                                
                            })}
                        </Col>
                    <Col xs={24} md={12} lg={12} xl={6}>
                        <p>MOBILE APP</p>
                        <img src='https://tix.vn/app/assets/img/icons/apple-logo.png' width="25px" height="30px" style={{ marginRight: '5px' }} alt="..." />
                        <img src='https://tix.vn/app/assets/img/icons/android-logo.png' width="25px" height="30px" alt="..." />

                    </Col>
                    <Col xs={24} md={12} lg={12} xl={6}>
                        <p>SOCIAL</p>
                        <img src='https://tix.vn/app/assets/img/icons/facebook-logo.png' width="30px" height="30px" style={{ marginRight: '5px' }} alt="..."/>
                        <img src='https://tix.vn/app/assets/img/icons/zalo-logo.png' width="30px" height="30px" alt="..."/>
                    </Col>
                    </Row>


                <hr className="myFooterHr" />

                <Row justify="center">
                    <Col sm={24} md={4} >
                        <img src='https://tix.vn/app/assets/img/icons/zion-logo.jpg' width="80px" alt="..."/>
                    </Col>
                    <Col sm={24}  md={16}>
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
                    <Col sm={24} md={4} >
                        <img src='https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png' width="130px" height="50px" alt="..."/>
                    </Col>
                </Row>

                </Col>
            </Row>
        </Footer>


    )
}
