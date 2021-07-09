import React from 'react'
import { Layout, Menu, Avatar, Dropdown, Select } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';
import _ from 'lodash'


export default function HomeTemplate() {

    //connect reducer lay thong tin login
    const { userLogin } = useSelector(state => state.UserReducer)
    console.log('userLogin', userLogin)


    const { Header } = Layout;
    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <NavLink target="_blank" rel="noopener noreferrer" to="https://www.antgroup.com">
                    Thông Tin Tài Khoản
                </NavLink>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
                <NavLink target="_blank" rel="noopener noreferrer" to="https://www.aliyun.com">
                    Đăng Xuất
                </NavLink>
            </Menu.Item>
        </Menu>
    );


    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo">
                    <NavLink to="/"><img src='https://tix.vn/app/assets/img/icons/web-logo.png' width='50px' height='50px' alt="web-logo" /></NavLink>
                </div>
                <Menu theme="light" mode="horizontal">
                    <Menu.Item key="1">Lịch Chiếu</Menu.Item>
                    <Menu.Item key="2">Cụm Rạp</Menu.Item>
                    <Menu.Item key="3">Tin Tức</Menu.Item>
                    <Menu.Item key="4">Ứng Dụng</Menu.Item>


                </Menu>
                <Menu theme="light" mode="horizontal">
                    <Menu.Item key="5">
                        {
                            _.isEmpty(userLogin) ? <NavLink to="/userlogin"><Avatar icon={<UserOutlined />} /> Đăng Nhập</NavLink> : <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <img src={`https://avatars.dicebear.com/api/human/${userLogin.taiKhoan}.svg`} width="30px" height="30px" />Hi ! {userLogin.taiKhoan} <DownOutlined />
                                </a>
                            </Dropdown>
                        }
                    </Menu.Item>
                    <Menu.Item key="6"><i class="fa fa-map-marker-alt"></i>
                        <>
                            <Select defaultValue="hcm" style={{ width: 120 }} onChange={handleChange}>
                                <Option value="hcm">Hồ Chí Minh</Option>
                                <Option value="hn">Hà Nội</Option>
                                <Option value="dn">Đà Nẵng</Option>
                                <Option value="hp">Hải Phòng</Option>
                                <Option value="bh">Biên Hòa</Option>
                            </Select>

                        </>
                    </Menu.Item>
                </Menu>
            </Header>

        </Layout>
    )
}
