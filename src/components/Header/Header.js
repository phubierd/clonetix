import React, { useEffect, useState } from 'react'
import { Layout, Menu, Avatar, Dropdown, Select, Button, BackTop, Modal, Tabs } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash'
import { ACCESSTOKEN, USER_LOGIN } from 'util/setting';
import { thongTinTaiKhoanAction } from 'redux/action/UserAction';
import moment from 'moment';


export default function Header(props) {
    //connect reducer lay thong tin login
    const { userLogin, thongTinTaiKhoan } = useSelector(state => state.UserReducer)
    // console.log('userLogin', userLogin)
    // console.log(thongTinTaiKhoan)

    const dispatch = useDispatch();
    const { Header } = Layout;
    const { Option } = Select;
    const { TabPane } = Tabs;

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [collapsed, setCollapsed] = useState(false)
    const handleClick = () => {
        setIsModalVisible(true)
    }

    const logOut = () => {
        // console.log(USER_LOGIN,'clicking ...')
        localStorage.removeItem(USER_LOGIN);
        localStorage.removeItem(ACCESSTOKEN);
        window.location.reload();
    }

    useEffect(() => {

        dispatch(thongTinTaiKhoanAction(userLogin))

    }, [])



    // ====== thong tin tai khoan
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Button type="text" onClick={() => {
                    // console.log(userLogin.taiKhoan)
                    // dispatch(thongTinTaiKhoanAction(userLogin))

                    Modal.info({
                        title: 'Thông Tin Tài Khoản',
                        closable: true,
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
            {(userLogin.maLoaiNguoiDung === "QuanTri") ? <Menu.Item key="1">
                <NavLink to="/quanlyphim"><Button type="text">Quản Lý Trang</Button></NavLink>
            </Menu.Item> : ''}

            <Menu.Divider />
            <Menu.Item key="2">
                <Button type="primary" danger onClick={() => {
                    // console.log('clicking...')
                    logOut()
                }}>Đăng Xuất</Button>
            </Menu.Item>
        </Menu>
    );


    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 2, width: '100%' }} className="myHeader">

                <div className="logo">
                    <NavLink to="/"><img src='https://tix.vn/app/assets/img/icons/web-logo.png' width='50px' height='50px' alt="web-logo" style={{ cursor: 'pointer' }} /></NavLink>
                </div>
                <div className="myHeader__navbar-mobile">
                    <i class="fa fa-bars"></i>
                </div>
                <Menu theme="light" mode="horizontal" className="myHeader__navbar">
                    <Menu.Item key="1" onClick={props.executeScroll} >Lịch Chiếu</Menu.Item>
                    <Menu.Item key="2" onClick={props.executeScroll}>Cụm Rạp</Menu.Item>
                    <Menu.Item key="3" onClick={props.executeScroll}>Tin Tức</Menu.Item>
                    <Menu.Item key="4" onClick={props.executeScroll}>Ứng Dụng</Menu.Item>


                </Menu>
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
                    {/* <Menu.Item key="6"><i class="fa fa-map-marker-alt"></i>
                        <>
                            <Select defaultValue="hcm" style={{ width: 120 }} >
                                <Option value="hcm">Hồ Chí Minh</Option>
                                <Option value="hn">Hà Nội</Option>
                                <Option value="dn">Đà Nẵng</Option>
                                <Option value="hp">Hải Phòng</Option>
                                <Option value="bh">Biên Hòa</Option>
                            </Select>

                        </>
                    </Menu.Item> */}
                </Menu>

            </Header>

            <BackTop />



        </Layout>
    )
}

{/* <div style={{ width: 256 }}>
    <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
    </Button>
    <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}

    >
        <Menu.Item key="1" onClick={props.executeScroll} >Lịch Chiếu</Menu.Item>
        <Menu.Item key="2" onClick={props.executeScroll}>Cụm Rạp</Menu.Item>
        <Menu.Item key="3" onClick={props.executeScroll}>Tin Tức</Menu.Item>
        <Menu.Item key="4" onClick={props.executeScroll}>Ứng Dụng</Menu.Item>

        <Menu.Item key="6"><i class="fa fa-map-marker-alt"></i>
            <>
                <Select defaultValue="hcm" style={{ width: 120 }} >
                    <Option value="hcm">Hồ Chí Minh</Option>
                    <Option value="hn">Hà Nội</Option>
                    <Option value="dn">Đà Nẵng</Option>
                    <Option value="hp">Hải Phòng</Option>
                    <Option value="bh">Biên Hòa</Option>
                </Select>

            </>
        </Menu.Item>
    </Menu>

</div> */}


