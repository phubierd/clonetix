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
                label="T??i Kho???n"
                tooltip="T??i Kho???n ????ng Nh???p"
                rules={[{ required: true, message: 'Vui L??ng ??i???n T??i Kho???n!', whitespace: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="matKhau"
                label="M???t Kh???u"
                rules={[
                    {
                        required: true,
                        pattern: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,32})"),
                        message: 'Vui L??ng ??i???n M???t Kh???u T???? 8-32 Ky?? T???? & Ch????a Ky?? T???? ??????c Bi????t!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="X??c Nh???n M???t Kh???u"
                dependencies={['matKhau']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Vui L??ng ??i???n M???t Kh???u X??c Nh???n!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('matKhau') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('M???t Kh???u Kh??ng Tr??ng Kh???p!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="hoTen"
                label="H??? T??n"
                rules={[{ required: true, message: 'Vui L??ng ??i???n H??? T??n!', whitespace: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'Kh??ng ????ng ?????nh D???ng Email !',
                    },
                    {
                        required: true,
                        message: 'Vui L??ng Nh???p Email!',
                    },
                ]}
            >
                <Input />
            </Form.Item>


            <Form.Item
                name="soDT"
                label="S??? ??i???n Tho???i"
                rules={[
                    {
                        required: true,
                        // type: 'regexp',
                        pattern: new RegExp("^[0-9]*$"),
                        whitespace: true,
                        message: 'Vui L??ng Nh???p S??? ??i???n Tho???i!'
                    },
                    {
                        len: 10,
                        message: 'Ch??? Ch???p Nh???n S??? (0-9) & 10 s??? !'
                    },

                ]}
            >
                <Input style={{ width: '100%' }} />
                {/* addonBefore='+84' */}
            </Form.Item>


            
            <Form.Item
                name="maNhom"
                label="Ma?? Nho??m"
                rules={[{ required: true, message: 'Vui L??ng Ch???n Ma?? Nho??m!' }]}
            >
                <Select placeholder="Cho??n Ma?? Nho??m">
                    <Option value="GP01">Group01</Option>
                    <Option value="GP02">Group02</Option>
                    <Option value="GP03">Group03</Option>
                </Select>
            </Form.Item>



            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" danger htmlType="submit">
                    ????ng K??
                </Button>
            </Form.Item>
        </Form >
    )
}
