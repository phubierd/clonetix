import React from 'react'
import { Form, Input, Button, Upload, message, Select, DatePicker, ConfigProvider } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './ThemPhim.css'
import moment from 'moment';
import 'moment/locale/vi';
import locale from 'antd/lib/locale/vi_VN';
export default function ThemPhim() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // ======upload file
    const props = {
        name: 'file',
        // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        // headers: {
        //     authorization: 'authorization-text',
        // },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    // ======select
    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    // ====date picker
    function onChange(date, dateString) {
        console.log(date, dateString);
    }


    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Mã Phim"
                    name="maPhim"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Tên Phim"
                    name="tenPhim"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Bí Danh"
                    name="biDanh"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Trailer"
                    name="trailer"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Hình Ảnh"
                    name="hinhAnh"

                >
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="Mô Tả"
                    name="moTa"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Mã Nhóm"
                    name="maNhom"
                >
                    <Select defaultValue="GP01" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="GP01">GP01</Option>
                        <Option value="GP02">GP02</Option>
                        <Option value="GP03">GP03</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Ngày Khởi Chiếu"
                    name="ngayKhoiChieu"
                >
                    <ConfigProvider locale={locale}>
                        <DatePicker onChange={onChange} format='DD/MM/YYYY' />
                    </ConfigProvider>
                </Form.Item>
                <Form.Item
                    label="Đánh Giá"
                    name="danhGia"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>



                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Thêm Phim
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
