import React from 'react'
import { Tabs, Space, Row, Col, Button } from 'antd';
import moment from 'moment';
import { NavLink } from 'react-router-dom';



export default function ListCinema(props) {

    const { TabPane } = Tabs;

    const { heThongRapChieu } = props;
    // console.log('hethongrap', heThongRapChieu)


    return (

        <Row align="center">
            <Col span={16} justify="center">
                <Space style={{ marginBottom: 24 }}>
                </Space>
                <Tabs tabPosition={'left'}>
                    {heThongRapChieu?.map((htr, index) => {
                        return <TabPane tab={
                            <div>
                                <img src={htr?.logo} width="50px" height="50px" alt="..."/>
                            </div>} key={index}>
                            {htr.cumRapChieu?.map((cumRap, index) => {
                                return <div key={index}>
                                    <Row justify="center" style={{ margin: '20px 0' }}>
                                        <Col sm={24} md={4} align="middle" style={{textAlign:'center'}}>
                                            <img src='https://picsum.photos/50/50' style={{ borderRadius: '50%' }} alt="..."/>
                                        </Col>
                                        <Col sm={24} md={20}>{cumRap.tenCumRap}
                                            <div>
                                                <Row>
                                                    {cumRap.lichChieuPhim.splice(0, 12).map((lichChieu, index) => {
                                                        return <div key={index} >
                                                            {/* {lichChieu.maLichChieu} */}
                                                            <NavLink to={`/checkout/${lichChieu.maLichChieu}`}>
                                                                <Button type="primary" danger style={{margin:'3px'}}>
                                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                </Button></NavLink>

                                                        </div>
                                                    })}
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            })}
                        </TabPane>
                    })}
                </Tabs>
            </Col>
        </Row>

    )
}
