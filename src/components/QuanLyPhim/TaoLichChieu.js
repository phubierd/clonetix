import React, { useEffect, useState } from 'react'
import locale from 'antd/lib/locale/vi_VN';
import { Form, Input, Button, Select, ConfigProvider, DatePicker, Space, Cascader } from 'antd';
import moment from 'moment';
import { getApiCumRapHeThongAction, postTaoLichChieuAction } from 'redux/action/FilmAction';
import { useDispatch, useSelector } from 'react-redux';

export default function TaoLichChieu(props) {

    const [date, setDate] = useState(moment(new Date()).format('DD/MM/YYYY HH:mm:ss'))
    const dispatch = useDispatch()
    const { arrHeThongRap } = useSelector(state => state.FilmReducer)
    // console.log(arrHeThongRap[0].danhSachRap)
    // console.log('object', props.object)
    console.log('arrHeThongRap', arrHeThongRap)
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({ maPhim: `${props.object.maPhim}` })

    }, [props.object])

    const { Option, OptGroup } = Select;
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    // ========= select
    const onHeThongRapChange = (heThongRap) => {
        // console.log('he thong rap', heThongRap)
        dispatch(getApiCumRapHeThongAction(heThongRap))
        // switch (value) {
        //     case 'male':
        //         form.setFieldsValue({ note: 'Hi, man!' });
        //         return;
        //     case 'female':
        //         form.setFieldsValue({ note: 'Hi, lady!' });
        //         return;
        //     case 'other':
        //         form.setFieldsValue({ note: 'Hi there!' });
        // }
    };
    const onMaRapChange = (maRap) => {
        console.log('ma rap', maRap)
    }


    const onFinish = (values) => {
        console.log(values);
        values.ngayKhoiChieu = date
        values.gia = Number(values.gia)
        const lichChieu = {
            maPhim:values.maPhim,
            giaVe:values.gia,
            ngayChieuGioChieu: date,
            maRap:values.maRap[1]
        }
        console.log('lich chieu',lichChieu)
        dispatch(postTaoLichChieuAction(lichChieu))
        
    };

    const onReset = () => {
        form.resetFields();
    };

    // ======== cascader
    const options = arrHeThongRap.map((item,index)=>{
        return {value:`${item.maCumRap}`, label:`${item.tenCumRap}`,items:item.danhSachRap.map((maRap,index)=>{
            return {value:`${maRap.maRap}`,label:`${maRap.tenRap}`}
        })}
    })
    console.log('options',options)
    //  [
    //     {
    //         value: `${arrHeThongRap?.maCumRap}`,
    //         label: `${arrHeThongRap?.tenCumRap}`,
    //         children: [
    //             {
    //                 value: 'hangzhou',
    //                 label: 'Hangzhou',
    //             },
    //         ],
    //     },
    // ];
    function onChangeCascader(value) {
        console.log(value);
    }

    // ==date
    function onChange(date, dateString) {
        console.log(moment(date).format('DD/MM/YYYY'), 'date')
        setDate(moment(date).format('DD/MM/YYYY HH:mm:ss'))
        // setDate(dateString)
    }
    const dateFormat = 'DD/MM/YYYY HH:mm'
    function onOk(value) {
        console.log('onOk: ', value);
        setDate(moment(value).format('DD/MM/YYYY HH:mm:ss'))

    }

    return (

        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item name="maPhim" label="Mã Phim" rules={[{ required: true }]}>
                <Input disabled />
            </Form.Item>

            <Form.Item name="heThongRap" label="Hệ Thống Rạp" rules={[{ required: true }]}>
                <Select
                    placeholder="Chọn Hệ Thống Rạp"
                    onChange={onHeThongRapChange}
                    allowClear
                >
                    <Option value="BHDStar">BHD Star Cineplex</Option>
                    <Option value="cgv">CGV</Option>
                    <Option value="CineStar">CineStar</Option>
                    <Option value="BHDStar">Galaxy Cinema</Option>
                    <Option value="LotteCinima">Lotte Cinema</Option>
                    <Option value="MegaGS">MegaGS</Option>
                </Select>
            </Form.Item>
            <Form.Item name="maRap" label="Mã Rạp" rules={[{ required: true }]}>
                {/* <Select
                    placeholder="Chọn Mã Rạp"
                    allowClear
                    onChange={onMaRapChange}

                >
                    {arrHeThongRap.map((item, index) => {
                        return <OptGroup key={index} label={item.tenCumRap}>
                            {item.danhSachRap.map((maRap, index) => {
                                return <Option key={index} value={maRap.maRap}>{maRap.tenRap}</Option>

                            })}
                        </OptGroup>
                    })}
                </Select> */}

                <Cascader
                    options={options}
                    onChange={onChange}
                    placeholder="Chọn Rạp"
                    fieldNames={{ label: 'label', value: 'value', children: 'items' }}
                />

            </Form.Item>

            <Form.Item
                label="Ngày Khởi Chiếu"
                name="ngayKhoiChieu"
            // rules={[{ required: true, message: 'Không được để trống!' }]}

            >
                <ConfigProvider locale={locale}>
                    <DatePicker showTime onChange={onChange} onOk={onOk} format={dateFormat} />
                </ConfigProvider>
            </Form.Item>
            <Form.Item name="gia" label="Giá Vé" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Space>
                    <Button type="primary" htmlType="submit">
                        Tạo Lịch Chiếu
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Space>
            </Form.Item>
        </Form>

    )
}
