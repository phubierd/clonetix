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
                                    <p>Th???a thu???n s??? d???ng</p>
                                    <p>Ch??nh s??ch b???o m???t</p>
                                </Col>
                            </Row>

                        </Col>
                        <Col xs={24} md={12} lg={12} xl={6}>
                            <p>?????I T??C</p>
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
                            TIX ??? S???N PH???M C???A C??NG TY C??? PH???N ZION
                        </Title>
                        <p>?????a ch???: Z06 ???????ng s??? 13, Ph?????ng T??n Thu???n ????ng, Qu???n 7, Tp. H??? Ch?? Minh, Vi???t Nam.
                        </p>
                        <p>Gi???y ch???ng nh???n ????ng k?? kinh doanh s???: 0101659783,</p>
                        <p>????ng k?? thay ?????i l???n th??? 30, ng??y 22 th??ng 01 n??m 2020 do S??? k??? ho???ch v?? ?????u t?? Th??nh ph??? H??? Ch?? Minh c???p.
                        </p>
                        <p>S??? ??i???n Tho???i (Hotline): 1900 545 436</p>
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
