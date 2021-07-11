import React, { useEffect } from 'react'
import { Tabs, Radio, Space, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCinemaApiAction, getListRapAction } from 'redux/action/CinemaAction';




export default function HomeCinema() {
    const { arrCinema } = useSelector(state => state.CinemaReducer)
    const { arrRap } = useSelector(state => state.CinemaReducer)
    const dispatch = useDispatch()
    const { TabPane } = Tabs;
    console.log('arrCinema', arrCinema)
    console.log('arrRap', arrRap)

    const handleClick = (maHeThongRap) => {

        const result = arrCinema.find(item => item.maHeThongRap === maHeThongRap)
        dispatch(getListRapAction(result.maHeThongRap))
    }

    useEffect(() => {
        dispatch(getCinemaApiAction())
        dispatch(getListRapAction('BHDStar'))
    }, [])
    return (
        <div>
            <Row justify="center">
                <Col span={16}>
                    <Space style={{ marginBottom: 24 }}>
                        <Radio.Group value='left'>
                        </Radio.Group>
                    </Space>
                    <Tabs tabPosition='left'>
                        {arrCinema.map((rap, index) => {
                            return <TabPane tab={
                                <div>
                                    <img src={rap.logo} alt="logo" width="50px" height="50px" onClick={() => { handleClick(rap.maHeThongRap) }}/>
                                </div>
                            } key={index}>
                                {/* Content of Tab 1 */}
                                <div>
                                    {arrRap.map((item,index)=>{
                                        return <div key={index}>
                                            {item.tenCumRap}
                                            <div>
                                                {item.diaChi}asdasd
                                            </div>
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
