import React from 'react'
import { Form, Input, Button, message, Select, } from 'antd';
import { useDispatch } from 'react-redux';
import { postAddUserAction } from 'redux/action/UserAction';


export default function AddUser() {
    const dispatch = useDispatch();

    const onFinish = (values) => {
        console.log(values)
        dispatch(postAddUserAction(values))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    // ======select
    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <div >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}

            >
                <Form.Item
                    label="Họ & Tên"
                    name="hoTen"
                    rules={[{ required: true, message: 'Không được để trống!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Tài Khoản"
                    name="taiKhoan"
                    rules={[{ required: true, message: 'Không được để trống!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Mật Khẩu"
                    name="matKhau"
                    rules={[{ required: true, message: 'Không được để trống!' },
                    {
                        pattern: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,32})"),
                        message: 'Vui Lòng Điền Mật Khẩu Từ 8-32 Ký Tự & Chứa Ký Tự Đặc Biệt!',
                    },]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Không được để trống!' },
                    {
                        type: 'email',
                        message: 'Không Đúng Định Dạng Email !',
                    }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Số Điện Thoại"
                    name="soDt"
                    rules={[{
                        required: true,
                        // type: 'regexp',
                        pattern: new RegExp("^[0-9]*$"),
                        whitespace: true,
                        message: 'Vui Lòng Nhập Số Điện Thoại!'
                    },
                    {
                        len: 10,
                        message: 'Chỉ Chấp Nhận Số (0-9) & 10 số !'
                    },]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mã Nhóm"
                    name="maNhom"
                    rules={[{ required: true, message: 'Vui lòng chọn mã nhóm!' }]}

                >
                    <Select onChange={handleChange} defaultValue="Chọn">
                        <Option value="GP01">GP01</Option>
                        <Option value="GP02">GP02</Option>
                        <Option value="GP03">GP03</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Mã Người Dùng"
                    name="maLoaiNguoiDung"
                    rules={[{ required: true, message: 'Vui lòng chọn mã nhóm!' }]}

                >
                    <Select onChange={handleChange} defaultValue="Chọn">
                        <Option value="KhachHang">Khách Hàng</Option>
                        <Option value="QuanTri">Quản Trị</Option>
                    </Select>
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Thêm Người Dùng
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
