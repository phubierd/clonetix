import React, { useState } from 'react'
import './Register.css'
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import { useDispatch } from 'react-redux';
import { dangKyAction } from 'redux/action/UserAction';


export default function Register() {

    const dispatch = useDispatch();


    const re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;

    const { Option } = Select;

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        dispatch(dangKyAction(values))
    }

    // const prefixSelector = (
    //     <Form.Item name="prefix" noStyle>
    //         <Select style={{ width: 70 }}>
    //             <Option value="86">+84</Option>
    //         </Select>
    //     </Form.Item>
    // );

    // const [autoCompleteResult, setAutoCompleteResult] = useState([])


    // const onWebsiteChange = (value) => {
    //     if (!value) {
    //         setAutoCompleteResult([]);
    //     } else {
    //         setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
    //     }
    // };

    // const websiteOptions = autoCompleteResult.map(website => ({
    //     label: website,
    //     value: website,
    // }));


    return (
        <Form
            className="Register__form"
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            <Form.Item
                name="taiKhoan"
                label="Tài Khoản"
                tooltip="Tài Khoản Đăng Nhập"
                rules={[{ required: true, message: 'Vui Lòng Điền Tài Khoản!', whitespace: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="matKhau"
                label="Mật Khẩu"
                rules={[
                    {
                        required: true,
                        pattern: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,32})"),
                        message: 'Vui Lòng Điền Mật Khẩu Từ 8-32 Ký Tự & Chứa Ký Tự Đặc Biệt!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Xác Nhận Mật Khẩu"
                dependencies={['matKhau']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Vui Lòng Điền Mật Khẩu Xác Nhận!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('matKhau') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Mật Khẩu Không Trùng Khớp!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="hoTen"
                label="Họ Tên"
                rules={[{ required: true, message: 'Vui Lòng Điền Họ Tên!', whitespace: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'Không Đúng Định Dạng Email !',
                    },
                    {
                        required: true,
                        message: 'Vui Lòng Nhập Email!',
                    },
                ]}
            >
                <Input />
            </Form.Item>


            <Form.Item
                name="soDT"
                label="Số Điện Thoại"
                rules={[
                    {
                        required: true,
                        // type: 'regexp',
                        pattern: new RegExp("^[0-9]*$"),
                        whitespace: true,
                        message: 'Vui Lòng Nhập Số Điện Thoại!'
                    },
                    {
                        len: 10,
                        message: 'Chỉ Chấp Nhận Số (0-9) & 10 số !'
                    },

                ]}
            >
                <Input style={{ width: '100%' }} />
                {/* addonBefore='+84' */}
            </Form.Item>


            
            <Form.Item
                name="maNhom"
                label="Mã Nhóm"
                rules={[{ required: true, message: 'Vui Lòng Chọn Mã Nhóm!' }]}
            >
                <Select placeholder="Chọn Mã Nhóm">
                    <Option value="GP01">Group01</Option>
                    <Option value="GP02">Group02</Option>
                    <Option value="GP03">Group03</Option>
                </Select>
            </Form.Item>



            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" danger htmlType="submit">
                    Đăng Ký
                </Button>
            </Form.Item>
        </Form >
    )
}
