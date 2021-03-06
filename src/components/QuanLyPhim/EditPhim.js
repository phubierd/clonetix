import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Upload, Select, DatePicker, ConfigProvider } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './ThemPhim.css'
import moment from 'moment';
import 'moment/locale/vi';
import locale from 'antd/lib/locale/vi_VN';
import { useDispatch, useSelector } from 'react-redux';
import { editPhimAction, themPhimAction } from 'redux/action/FilmAction';
export default function EditPhim(props) {
    const [date, setDate] = useState(moment(new Date()).format('DD/MM/YYYY'))
    // const [editPhimValue,setEditPhimValue] = useState({...props.object})
    // console.log('props',props.object,props.object.maPhim)
    const dispatch = useDispatch();
    // useEffect(()=>{
    //     setEditPhimValue({...props.object})
    // },[props.object])
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({
            maPhim: props.object.maPhim,
            tenPhim: props.object.tenPhim,
            biDanh:props.object.biDanh,
            trailer:props.object.trailer,
            hinhAnh:props.object.hinhAnh,
            danhGia:props.object.danhGia,
            ngayKhoiChieu:props.object.ngayKhoiChieu,
            moTa:props.object.moTa
        })
    }, [props.object])

    // ======select
    const { Option } = Select;
    const onFinish = (values) => {
        values.ngayKhoiChieu = date
        values.maPhim = Number(values.maPhim)
        values.danhGia = Number(values.danhGia)
        values.hinhAnh = values.hinhAnh.file

        console.log('Success:', values);


        let formData = new FormData();
        for (let key in values) {
            formData.append(key, values[key])
        }
        formData.forEach((item, index) => {
            console.log('formData', item, index)
        })

        dispatch(editPhimAction(formData))

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    // ====date picker
    function onChange(date, dateString) {
        setDate(moment(date).format('DD/MM/YYYY'))
    }
    const dateFormat = 'DD/MM/YYYY'
    // console.log(editPhimValue.maPhim, 'editPhimValue.maPhim ???')
    return (
        <div >
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            // initialValues={props.object}
            // onValuesChange={props.object}
            >
                <Form.Item
                    label="M?? Phim"
                    name="maPhim"
                    rules={[{ required: true, message: 'Kh??ng ???????c ????? tr???ng!' }]}
                // initialValue={props.object.maPhim}
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    label="T??n Phim"
                    name="tenPhim"
                    rules={[{ required: true, message: 'Kh??ng ???????c ????? tr???ng!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="B?? Danh"
                    name="biDanh"
                    rules={[{ required: true, message: 'Kh??ng ???????c ????? tr???ng!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Trailer"
                    name="trailer"
                    rules={[{ required: true, message: 'Kh??ng ???????c ????? tr???ng!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="H??nh ???nh"
                    name="hinhAnh"
                // rules={[{ required: true, message: 'Kh??ng ???????c ????? tr???ng!' }]}

                >
                    <Upload beforeUpload={() => false}  >
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                    {/* <br /> */}
                    {/* <img width='100px' height='100px' src={imgSrc} alt="..." ></img> */}
                </Form.Item>
                <Form.Item
                    label="M?? T???"
                    name="moTa"
                    rules={[{ required: true, message: 'Kh??ng ???????c ????? tr???ng!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="M?? Nh??m"
                    name="maNhom"
                    rules={[{ required: true, message: 'Vui l??ng ch???n m?? nh??m!' }]}

                >
                    <Select style={{ width: 120 }} defaultValue="Ch???n">
                        <Option value="GP01">GP01</Option>
                        <Option value="GP02">GP02</Option>
                        <Option value="GP03">GP03</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Ng??y Kh???i Chi???u"
                    name="ngayKhoiChieu"
                // rules={[{ required: true, message: 'Kh??ng ???????c ????? tr???ng!' }]}

                >
                    <ConfigProvider locale={locale}>
                        <DatePicker onChange={onChange} format={dateFormat} />
                    </ConfigProvider>
                </Form.Item>
                <Form.Item
                    label="????nh Gi??"
                    name="danhGia"
                    rules={[{ required: true, message: 'Kh??ng ???????c ????? tr???ng!' }]}
                >
                    <Input />
                </Form.Item>



                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Ch???nh S???a Phim
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

