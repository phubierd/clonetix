import React from 'react'
import { Layout, Menu} from 'antd';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import './Header.css';
import MyCarousel from '../Carousel/Carousel';

export default function HomeTemplate() {
    const { Header, Content, Footer } = Layout;
    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}} >
                <div className="logo">
                    <a href="#"><img src="./imgTix/web-logo.png" width='50px' height='50px'/></a>
                </div>
                <Menu theme="light" mode="horizontal" co>
                    <Menu.Item key="1">Lịch Chiếu</Menu.Item>
                    <Menu.Item key="2">Cụm Rạp</Menu.Item>
                    <Menu.Item key="3">Tin Tức</Menu.Item>
                    <Menu.Item key="4">Ứng Dụng</Menu.Item>
                    <Menu.Item key="5"><Avatar icon={<UserOutlined />} /> Đăng Nhập</Menu.Item>
                    <Menu.Item key="6"><i class="fa fa-map-marker-alt"></i> <>
                        <Select defaultValue="hcm" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="hcm">Hồ Chí Minh</Option>
                            <Option value="hn">Hà Nội</Option>
                            <Option value="dn">Đà Nẵng</Option>
                            <Option value="hp">Hải Phòng</Option>
                            <Option value="bh">Biên Hòa</Option>
                        </Select>
                       
                    </></Menu.Item>
                </Menu>
            </Header>

            {/* <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                  <MyCarousel/>
                </div>
            </Content> */}

            {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}



        </Layout>
    )
}
