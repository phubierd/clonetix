import React, { useEffect } from 'react'
import { Tabs, Radio, Space, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCinemaApiAction, getListRapAction } from 'redux/action/CinemaAction';
import './HomeCinema.css'



export default function HomeCinema(props) {
    const { arrCinema } = useSelector(state => state.CinemaReducer)
    const { arrRap } = useSelector(state => state.CinemaReducer)
    const dispatch = useDispatch()
    const { TabPane } = Tabs;
    // console.log('arrCinema', arrCinema)
    // console.log('arrRap', arrRap)

    const handleClick = (maHeThongRap) => {

        const result = arrCinema.find(item => item.maHeThongRap === maHeThongRap)
        dispatch(getListRapAction(result.maHeThongRap))
    }

    useEffect(() => {
        dispatch(getCinemaApiAction())
        dispatch(getListRapAction('BHDStar'))
    }, [])
    return (
        <div id="cumRapID" ref={props.myRef}>
            <h2 style={{color:'rgba(144, 24, 24, 0.85)',textAlign:'center'}} >Thông Tin Rạp</h2>
            <Row justify="center">
                <Col span={16}>
                    <Space style={{ marginBottom: 24 }}>
                        <Radio.Group value='left'>
                        </Radio.Group>
                    </Space>
                    <Tabs tabPosition='left' className="cumRam__tab"> 
                        {arrCinema.map((rap, index) => {
                            return <TabPane tab={
                                <div>
                                    <img src={rap.logo} alt="logo" width="50px" height="50px" onClick={() => { handleClick(rap.maHeThongRap) }} />
                                </div>
                            } key={index}>
                                {/* Content of Tab 1 */}
                                <div>
                                    {arrRap.map((item, index) => {
                                        return <div key={index} style={{ margin: '10px' }}>
                                            <Row justify="center">
                                                <Col sm={24} md={4} align="middle">
                                                    <img src="https://picsum.photos/200/200" width='50px' height='50px' alt="..." style={{ marginRight: '10px', alignSelf: 'center', borderRadius: '10px' }} />

                                                </Col>
                                                <Col sm={24} md={20}>
                                                    <div>
                                                        <h2 style={{ color: 'rgb(144 24 24 / 85%)' }}>{item.tenCumRap}</h2>
                                                        <p>
                                                            Địa Chỉ: {item.diaChi}asdasd
                                                        </p>
                                                    </div>
                                                </Col>

                                            </Row>
                                        </div>
                                    })}
                                </div>

                            </TabPane>
                        })}

                    </Tabs>

                </Col>
            </Row>

        </div>
    )
}
