import React from 'react'
import { Row, Col, Divider } from 'antd';



export default function ListFilm() {
    return (
        <>

            <Divider orientation="left">sub-element align center</Divider>
            <Row justify="center">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
            </Row>

        </>
    )
}
