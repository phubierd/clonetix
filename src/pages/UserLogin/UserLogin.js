import React, { useState } from 'react'
import './UserLogin.css'
import { Form, Input, Button, Checkbox, Drawer, } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import Register from 'pages/Register/Register';
import { useDispatch } from 'react-redux';
import { dangNhapAction } from 'redux/action/UserAction';

export default function UserLogin(props) {

    // console.log(props)
    const dispatch = useDispatch();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        dispatch(dangNhapAction(values))
    }

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className="userLogin">
            <div className="userLogin__form">
                <div className="userLogin__form-header">
                    <NavLink to="/"><img src="	https://tix.vn/app/assets/img/login/group@2x.png" alt="logo" width="100%" /></NavLink>
                </div>
                <div className="userLogin__close">
                    <NavLink to="/"><i class="fa fa-times-circle"></i></NavLink>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="taiKhoan"
                        rules={[{ required: true, message: 'Vui Lòng Nhập Thông Tin!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tài Khoản" />
                    </Form.Item>
                    <Form.Item
                        name="matKhau"
                        rules={[{ required: true, message: 'Vui Lòng Nhập Mật Khẩu !' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Mật Khẩu"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox style={{ color: 'white' }}>Ghi Nhớ</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Quên Mật Khẩu
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Đăng Nhập
                        </Button>
                        <>
                            <Button type="text" onClick={showDrawer}
                                style={{ color: 'indianred' }}>
                                Đăng Ký Ngay!
                            </Button>
                            <Drawer
                                className="UserLogin__drawer"
                                title="Form Đăng Ký User"
                                placement="right"
                                closable={false}
                                onClose={onClose}
                                visible={visible}
                            >
                                <Register />
                            </Drawer>
                        </>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

