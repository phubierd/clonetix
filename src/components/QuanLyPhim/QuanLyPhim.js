import React, { useEffect, useState } from 'react'
import { Button, Space, Table, Drawer, Input, Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getApiFilmAction, searchPhimAction, xoaPhimAction } from 'redux/action/FilmAction';
import moment from 'moment';
// import { NavLink } from 'react-router-dom';
import './QuanLyPhim.css'
import ThemPhim from './ThemPhim';
import { DeleteOutlined, EditOutlined, FolderAddOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import EditPhim from './EditPhim';
import TaoLichChieu from './TaoLichChieu';
export default function QuanLyPhim(props) {
    const dispatch = useDispatch();
    const { Column, ColumnGroup } = Table;
    const { arrFilm } = useSelector(state => state.FilmReducer)
    const [selectedObject, setSelectedObject] = useState({})
    const data = arrFilm;
    // console.log('arrFilm',arrFilm)

    const { arrFilmSearch } = useSelector(state => state.FilmReducer)
    const searchList = arrFilmSearch && arrFilmSearch.length > 0 ? arrFilmSearch : data
    // console.log('arrFilmSearch', arrFilmSearch)

    // console.log('arrFilmSearch data', data)
    useEffect(() => {
        dispatch(getApiFilmAction());

    }, [])



    // ====modal
    const [visible, setVisible] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false)
    const [childrenDrawerLichChieu, setChildrenDrawerLichChieu] = useState(false)
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    // ===child modal
    const showChildrenDrawer = (object) => {
        setChildrenDrawer(true);
        setSelectedObject(object)
        console.log(object)

    };

    const onChildrenDrawerClose = (object) => {
        setChildrenDrawer(false);
        console.log(object)

    };
    // ===child modal lich chieu
    const showChildrenDrawerLichChieu = (object) => {
        setChildrenDrawerLichChieu(true);
        setSelectedObject(object)
        // console.log(object)

    };

    const onChildrenDrawerCloseLichChieu = (object) => {
        setChildrenDrawerLichChieu(false);
        // setSelectedObject(null)
        // console.log(object)

    };





    //===== search
    const { Search } = Input;
    const onSearch = value => {
        dispatch(searchPhimAction(value || ''))
        // console.log(value)

    }

    //===== action

    const handleClick = (object) => {
        console.log(object)
    }

    const handleConfirmDelete = (object) => {
        // console.log('handle Del', object.maPhim)
        dispatch(xoaPhimAction(object.maPhim))
    }

    return (
        <div className="quanLyPhim">
            <Button type="primary" onClick={showDrawer}>Thêm Phim</Button>
            <Drawer
                className="themPhimDrawer"
                title="Thêm Phim"
                width={600}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                
            >
                <ThemPhim />
            </Drawer>
            <div style={{ margin: '10px 0' }}>
                <Space direction="vertical" >
                    <Search size={'large'} placeholder="Tìm Kiếm..." onSearch={onSearch} enterButton />
                </Space>
            </div>
            <Table dataSource={searchList}>
                <ColumnGroup title="Quản Lý Phim">
                    <Column title="Mã Phim" dataIndex="maPhim" key="maPhim" />
                    <Column title="Tên Phim" dataIndex="tenPhim" key="tenPhim" />
                    <Column title="Bí Danh" dataIndex="biDanh" key="biDanh" />
                    <Column title="Hình Ảnh" dataIndex="hinhAnh" key="hinhAnh"
                        render={(text, record) => (
                            <img src={record.hinhAnh} height='80px' width='80px' />
                        )}
                    />
                    <Column title="Mô Tả" dataIndex="moTa" key="moTa" />
                    <Column
                        title="Ngày Khởi Chiếu"
                        key="ngayKhoiChieu"
                        render={(text, record) => (
                            <>{moment(record.ngayKhoiChieu).format('DD/MM/YYYY')}</>
                        )}
                    />
                    <Column title="Đánh Giá" dataIndex="danhGia" key="danhGia" />

                    <Column
                        title="Thao Tác"
                        key="action"
                        render={(text, record) => (

                            <Space>
                                {/* <Button type="primary" onClick={() => handleClick(record)}><FolderAddOutlined /></Button> */}
                                <Button type="primary" onClick={() => showChildrenDrawerLichChieu(record)}><FolderAddOutlined /></Button>

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
            {/* drawer edit phim */}
            <Drawer
                style={{ opacity: '1' }}
                title="Chỉnh Sửa Phim"
                width={600}
                closable={false}
                onClose={onChildrenDrawerClose}
                visible={childrenDrawer}
                className="editPhimDrawer"
            >
                <EditPhim object={selectedObject} />
            </Drawer>

            <Drawer
                style={{ opacity: '1' }}
                title="Tạo Lịch Chiếu"
                width={600}
                closable={false}
                onClose={onChildrenDrawerCloseLichChieu}
                visible={childrenDrawerLichChieu}
                className="taoLichChieuDrawer"
            >
            <TaoLichChieu object={selectedObject}/>
            </Drawer>
        </div>
    )
}
