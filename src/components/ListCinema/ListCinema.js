import React, { useState } from 'react'
import { Tabs, Radio, Space, Row, Col } from 'antd';



export default function ListCinema() {

    const { TabPane } = Tabs;
    const [state, setState] = useState({
        tabPosition: 'left',
    })

    const changeTabPosition = e => {
        setState({ tabPosition: e.target.value });
    };

    const { tabPosition } = state;
    return (

        <Row align="center">
            <Col span={16} justify="center">
                <Space style={{ marginBottom: 24 }}>
                    Tab position:
                    <Radio.Group value={'left'} onChange={changeTabPosition}>
                        <Radio.Button value="top">top</Radio.Button>
                        <Radio.Button value="bottom">bottom</Radio.Button>
                        <Radio.Button value="left">left</Radio.Button>
                        <Radio.Button value="right">right</Radio.Button>
                    </Radio.Group>
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
