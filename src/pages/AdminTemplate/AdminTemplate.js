import React, { useEffect, useState } from 'react'
import './AdminTemplate.css'

import { Layout, Menu, Dropdown, Select, Button, BackTop, Modal, Tabs, Alert } from 'antd';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    DownOutlined,
} from '@ant-design/icons';
import { NavLink, Redirect, Route } from 'react-router-dom';
import _ from 'lodash'
import Avatar from 'antd/lib/avatar/avatar';
import { useDispatch, useSelector } from 'react-redux';
import { thongTinTaiKhoanAction } from 'redux/action/UserAction';
import moment from 'moment';
import { ACCESSTOKEN, USER_LOGIN } from 'util/setting';



export default function AdminPage(props) {
    const { userLogin, thongTinTaiKhoan } = useSelector(state => state.UserReducer)
    const dispatch = useDispatch()
    const { Header, Sider, Content } = Layout;
    const { TabPane } = Tabs;
    const [state, setState] = useState({
        collapsed: false,
    })

    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };
    const logOut = () => {
        // console.log(USER_LOGIN,'clicking ...')
        localStorage.removeItem(USER_LOGIN);
        localStorage.removeItem(ACCESSTOKEN);
        window.location.reload();
    }
    useEffect(()=>{
        dispatch(thongTinTaiKhoanAction(userLogin))

    },[])

    if (userLogin.maLoaiNguoiDung !== 'QuanTri'){
        alert('Bạn Không Có Quyền Truy Cập Vào ..!!')
        return <Redirect to='/'/>
    }

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Button type="text" onClick={() => {
                    // console.log(userLogin.taiKhoan)
                    dispatch(thongTinTaiKhoanAction(userLogin))

                    Modal.info({
                        title: 'Thông Tin Tài Khoản',
                        content: (
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Thông Tin Tài Khoản" key="1">
                                    <form className="formHeader">
                                        <label>Họ Tên: </label>
                                        <input type="text" value={thongTinTaiKhoan?.hoTen} disabled></input>
                                        <br />
                                        <label>Tài Khoản: </label>
                                        <input type="text" value={thongTinTaiKhoan?.taiKhoan} disabled></input>
                                        <br />
                                        <label>Email: </label>
                                        <input type="text" value={thongTinTaiKhoan?.email} disabled></input>
                                        <br />
                                        <label>Số Điện Thoại: </label>
                                        <input type="text" value={thongTinTaiKhoan?.soDT} disabled></input>
                                        <br />
                                    </form>
                                </TabPane>
                                <TabPane tab="Lịch Sử Đặt Vé" key="2">
                                    {thongTinTaiKhoan.thongTinDatVe?.map((item, index) => {
                                        return <div style={{ borderBottom: '1px solid orange', margin: '10px 0' }} key={index}>
                                            <p>Ngày Đặt: <span>{moment(item.ngayDat).format('MMMM Do YYYY, h:mm:ss a')}</span></p>
                                            <p>Tên Phim: <span>{item.tenPhim}</span></p>
                                            <p>Giá Vé: <span>{item.giaVe}</span></p>
                                        </div>
                                    })}
                                </TabPane>
                            </Tabs>
                        ),
                        onOk() { },
                    });
                }}>
                    Thông Tin Tài Khoản
                </Button>


            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
                <Button type="primary" danger onClick={() => {
                    // console.log('clicking...')
                    logOut()
                }}>Đăng Xuất</Button>
            </Menu.Item>
        </Menu>
    );

    

    return (
        <Route path={props.path} exact render={(propsRoute) => {
            return  <Layout style={{ height: '100%', minHeight:'100vh' }} className="adminTemplate">
                <Sider trigger={null} collapsible collapsed={!state.collapsed}>
                    <div className="logo" style={{ textAlign: 'center' }}>
                        <NavLink to="/"><img src='https://tix.vn/app/assets/img/icons/web-logo.png' width='50px' height='50px' alt="web-logo" style={{ cursor: 'pointer' }} /></NavLink>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<VideoCameraOutlined />}>
                            <NavLink to="/quanlyphim">Quản Lý Phim</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                            <NavLink to="/quanlynguoidung">Quản Lý Người Dùng</NavLink>
                            
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background adminTemplate__header" style={{ padding: 0 }}>
                        <Button onClick={toggle} danger style={{alignSelf:'center'}}><MenuUnfoldOutlined/></Button>
                        <div>
                            <Menu theme="light" mode="horizontal">
                                <Menu.Item key="5">
                                    {
                                        _.isEmpty(userLogin) ? <NavLink to="/userlogin"><Avatar icon={<UserOutlined />} /> Đăng Nhập</NavLink> : <Dropdown overlay={menu}>
                                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                <img src={`https://avatars.dicebear.com/api/human/${userLogin.taiKhoan}.svg`} width="30px" height="30px" alt="..." />Hi ! {userLogin.taiKhoan} <DownOutlined />
                                            </a>
                                        </Dropdown>
                                    }
                                </Menu.Item>
                            </Menu>
                        </div>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <props.component {...propsRoute}/>
                    </Content>
                </Layout>
            </Layout>
           
        }} />
    )
}
