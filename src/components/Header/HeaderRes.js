import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderRes.css'

import { Layout, Menu, Avatar, Dropdown, Select, Button, BackTop, Modal, Tabs } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash'
import { ACCESSTOKEN, USER_LOGIN } from 'util/setting';
import { thongTinTaiKhoanAction } from 'redux/action/UserAction';
import moment from 'moment';

export default function HeaderRes() {

    //connect reducer lay thong tin login
    const { userLogin, thongTinTaiKhoan } = useSelector(state => state.UserReducer)
    // console.log('userLogin', userLogin)
    // console.log(thongTinTaiKhoan)

    const dispatch = useDispatch();
    const { TabPane } = Tabs;


    const logOut = () => {
        // console.log(USER_LOGIN,'clicking ...')
        localStorage.removeItem(USER_LOGIN);
        localStorage.removeItem(ACCESSTOKEN);
        window.location.reload();
    }

    useEffect(() => {

        dispatch(thongTinTaiKhoanAction(userLogin))

    }, [])
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { Option } = Select;
    const handleClick = () => {
        setIsModalVisible(true)
    }



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
                <NavLink to="/quanlyphim" ><Button type="text">Quản Lý Trang</Button></NavLink>
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
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top myNavbar">
                <a className="navbar-brand" href="#">
                    <NavLink to="/"><img src='https://tix.vn/app/assets/img/icons/web-logo.png' width='50px' height='50px' alt="web-logo" style={{ cursor: 'pointer' }} /></NavLink>
                </a>

                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mt-2 mt-lg-0 m-auto " >
                        <li className="nav-item text-center">
                            <a className="nav-link" href="#listFilmID">Lịch Chiếu </a>
                        </li>
                        <li className="nav-item text-center">
                            <a className="nav-link" href="#cumRapID">Cụm Rạp</a>
                        </li>
                        <li className="nav-item text-center">
                            <a className="nav-link" href="#newsID">Tin Tức</a>
                        </li>
                        <li className="nav-item text-center">
                            <a className="nav-link" href="#appMobileID">Ứng Dụng</a>
                        </li>
                        <li className="nav-item ml-auto myNavbar__infoUser">
                            {
                                _.isEmpty(userLogin) ? <NavLink to="/userlogin"><Avatar icon={<UserOutlined />} /> Đăng Nhập</NavLink> : <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        <img src={`https://avatars.dicebear.com/api/human/${userLogin.taiKhoan}.svg`} width="30px" height="30px" alt="..." />Hi ! {userLogin.taiKhoan} <DownOutlined />
                                    </a>
                                </Dropdown>
                            }
                            
                        </li>
                    </ul>

                </div>

                {/* <Menu theme="light" mode="horizontal" className="myNavbar__infoUser ">
                    <Menu.Item key="5">
                        {
                            _.isEmpty(userLogin) ? <NavLink to="/userlogin"><Avatar icon={<UserOutlined />} /> Đăng Nhập</NavLink> : <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <img src={`https://avatars.dicebear.com/api/human/${userLogin.taiKhoan}.svg`} width="30px" height="30px" alt="..." />Hi ! {userLogin.taiKhoan} <DownOutlined />
                                </a>
                            </Dropdown>
                        }
                    </Menu.Item>
                    <Menu.Item key="6" className="myNavbar__location"><i class="fa fa-map-marker-alt"></i>
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
                </Menu> */}

            </nav>
            <BackTop />
        </header>

    )
}




