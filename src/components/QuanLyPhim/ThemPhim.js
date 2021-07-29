import React, { useState } from 'react'
import { Form, Input, Button, Upload, message, Select, DatePicker, ConfigProvider } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './ThemPhim.css'
import moment from 'moment';
import 'moment/locale/vi';
import locale from 'antd/lib/locale/vi_VN';
import { useDispatch } from 'react-redux';
import { themPhimAction } from 'redux/action/FilmAction';
export default function ThemPhim(props) {
    const [date, setDate] = useState(moment(new Date()).format('DD/MM/YYYY'))
    const [imgSrc, setImgSrc] = useState('');
    const dispatch = useDispatch();

    const onFinish = (values) => {
        values.ngayKhoiChieu = date
        values.maPhim = Number(values.maPhim)
        values.danhGia = Number(values.danhGia)
        values.hinhAnh = values.hinhAnh.file
        // parseInt(values.maPhim)

        console.log('Success:', values);


        //biến đối tượng thành formData
        let formData = new FormData();
        for (let key in values) {

            //xử lý nếu duyệt tới truòng hình ảnh dạng file thì đưa vào đối tượng formData với 3 tham số
            // if (key === 'hinhAnh') {
            //     formData.append('File', values[key], values[key].name)
            // } else {
            //     formData.append(key, values[key])
            // }
            formData.append(key, values[key])
        }
        formData.forEach((item, index) => {
            console.log('formData', item, index)
        })

        dispatch(themPhimAction(formData))

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // ======= upload
    // const handleImg = (value) => {

    //     console.log(value)
    //     setImgSrc=(value.file)
    // }

    // ======select
    const { Option } = Select;

    function handleChange(value) {
        // console.log(`selected ${value}`);
    }

    // ====date picker
    function onChange(date, dateString) {
        // console.log(moment(date).format('DD/MM/YYYY'),'date')
        setDate(moment(date).format('DD/MM/YYYY'))
        // setDate(dateString)
    }
    const dateFormat = 'DD/MM/YYYY'

    // console.log(date, 'date ???')
    return (
        <div className="themPhim">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            // initialValues={testDate}


            >
                <Form.Item
                    label="Mã Phim"
                    name="maPhim"
                    rules={[{ required: true, message: 'Không được để trống!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Tên Phim"
                    name="tenPhim"
                    rules={[{ required: true, message: 'Không được để trống!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Bí Danh"
                    name="biDanh"
                    rules={[{ required: true, message: 'Không được để trống!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Trailer"
                    name="trailer"
                    rules={[{ required: true, message: 'Không được để trống!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Hình Ảnh"
                    name="hinhAnh"
                // rules={[{ required: true, message: 'Không được để trống!' }]}

                >
                    <Upload beforeUpload={() => false}  >
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                    {/* <br /> */}
                    {/* <img width='100px' height='100px' src={imgSrc} alt="..." ></img> */}
                </Form.Item>
                <Form.Item
                    label="Mô Tả"
                    name="moTa"
                    rules={[{ required: true, message: 'Không được để trống!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Mã Nhóm"
                    name="maNhom"
                    rules={[{ required: true, message: 'Vui lòng chọn mã nhóm!' }]}

                >
                    <Select style={{ width: 120 }} onChange={handleChange} defaultValue="Chọn">
                        <Option value="GP01">GP01</Option>
                        <Option value="GP02">GP02</Option>
                        <Option value="GP03">GP03</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Ngày Khởi Chiếu"
                    name="ngayKhoiChieu"
                // rules={[{ required: true, message: 'Không được để trống!' }]}

                >
                    <ConfigProvider locale={locale}>
                        <DatePicker onChange={onChange} format={dateFormat} />
                    </ConfigProvider>
                </Form.Item>
                <Form.Item
                    label="Đánh Giá"
                    name="danhGia"
                    rules={[{ required: true, message: 'Không được để trống!' }]}
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

