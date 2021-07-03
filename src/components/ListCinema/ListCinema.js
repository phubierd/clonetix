import React, { useEffect, useState } from 'react'
import { Tabs, Radio, Space, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { getApiFilmDetaiAction } from 'redux/action/FilmAction';



export default function ListCinema(props) {

    const { TabPane } = Tabs;
   


   
    return (

        <Row align="center">
            <Col span={16} justify="center">
                <Space style={{ marginBottom: 24 }}>
                </Space>
                <Tabs tabPosition={'left'}>
                    <TabPane tab="Tab 1" key="1">
                        Content of Tab 1
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab 3
                    </TabPane>
                </Tabs>
            </Col>
        </Row>

    )
}
