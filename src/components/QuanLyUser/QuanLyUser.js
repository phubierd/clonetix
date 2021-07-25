import React, { useEffect, useState } from 'react'
import { Table, Tag, Space, Button, Popconfirm, Drawer, Input } from 'antd';
import { delApiUserAction, getApiArrUser, getApiTimKiemAction } from 'redux/action/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutlined, EditOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import Search from 'antd/lib/transfer/search';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

export default function QuanLyUser() {
    const { Column, ColumnGroup } = Table;
    const dispatch = useDispatch()
    const { arrUser,arrTimKiemUser } = useSelector(state => state.UserReducer)
    // console.log('arrTimKiemUser',arrTimKiemUser)
    // console.log('arrUser', arrUser)
    useEffect(() => {
        dispatch(getApiArrUser())
    }, [])
    const handleConfirmDelete = (object) => {
        console.log('handle Del', object)
        dispatch(delApiUserAction(object.taiKhoan))
    }
    //===== search
    const { Search } = Input;
    const onSearch = value => {
        // console.log('tim kiem',value)
        dispatch(getApiTimKiemAction(value))

    }

    // === modal
    const [visible, setVisible] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false)
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const showChildrenDrawer = (object) => {
        setChildrenDrawer(true);
        // setSelectedObject(object)
        // console.log(object)

    };
    const onChildrenDrawerClose = (object) => {
        setChildrenDrawer(false);
        // console.log(object)

    };
    const data =  arrTimKiemUser.length > 0 ? arrTimKiemUser : arrUser
    return (
        <div>
            <Button type="primary" onClick={showDrawer}>Thêm Người Dùng</Button>
            <Drawer
                className="themPhim"
                title="Thêm Phim"
                width={600}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                {/* <ThemPhim /> */}
            </Drawer>
            <div style={{ margin: '10px 0' }}>
                <Space direction="vertical" >
                    <Search size={'large'} placeholder="Tìm Kiếm..." onSearch={onSearch} enterButton />
                </Space>
            </div>
            <Table dataSource={data} pagination={{ defaultPageSize: 20 }}>
                <ColumnGroup title="Quản Lý Người Dùng">
                    <Column title="Họ Tên" dataIndex="hoTen" key="hoTen" />
                    <Column title="Tài Khoản" dataIndex="taiKhoan" key="taiKhoan" />
                    {/* <Column title="Mật Khẩu" dataIndex="matKhau" key="matKhau" /> */}
                    <Column title="Email" dataIndex="email" key="email" />
                    {/* <Column title="Số Điện Thoại" dataIndex="soDt" key="soDt" responsive={['md']} /> */}
                    <Column
                        title="Loại Người Dùng"
                        key="maLoaiNguoiDung"
                        render={(text, record) => (
                            <>

                                <Tag color="blue">
                                    {record.maLoaiNguoiDung}
                                    {/* {console.log(record)} */}
                                </Tag>

                            </>
                        )}
                    />
                    <Column
                        title="Thao Tác"
                        key="action"
                        render={(text, record) => (

                            <Space>
                                <Button type="primary" onClick={() => showChildrenDrawer(record)}><EditOutlined /></Button>
                                <Popconfirm title="Xác Nhận Xóa？" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                                    onConfirm={() => handleConfirmDelete(record)}
                                >
                                    <Button type="primary" danger><DeleteOutlined /></Button>
                                </Popconfirm>
                            </Space>
                        )}
                    />
                </ColumnGroup>

            </Table>

            <Drawer
                style={{ opacity: '1' }}
                title="Chỉnh Sửa Phim"
                width={600}
                closable={false}
                onClose={onChildrenDrawerClose}
                visible={childrenDrawer}
            >
                {/* <EditPhim object={selectedObject} /> */}
            </Drawer>
        </div>
    )
}
