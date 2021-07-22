import React, { useEffect, useState,useMemo } from 'react'
import { Button, Space, Table, Drawer, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getApiFilmAction, searchPhimAction } from 'redux/action/FilmAction';
import moment from 'moment';
// import { NavLink } from 'react-router-dom';
import './QuanLyPhim.css'
import ThemPhim from './ThemPhim';
import { DeleteOutlined, EditOutlined, FolderAddOutlined } from '@ant-design/icons';
export default function QuanLyPhim(props) {


    const dispatch = useDispatch();
    const { Column, ColumnGroup } = Table;
    const { arrFilm } = useSelector(state => state.FilmReducer)
    const data = arrFilm;
    // console.log('arrFilm',arrFilm)

    const { arrFilmSearch } = useSelector(state => state.FilmReducer)
    const searchList =  arrFilmSearch && arrFilmSearch.length > 0 ? arrFilmSearch : data
    // console.log('arrFilmSearch', arrFilmSearch)

    // console.log('arrFilmSearch data', data)
    useEffect(() => {
        dispatch(getApiFilmAction());

    }, [])



    // ====modal
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };


    //===== search
    const { Search } = Input;
    const onSearch = value => {
        dispatch(searchPhimAction(value || ''))
        // console.log(value)

    }

    //===== action

    const handleClick = (object) => {
        // const result = arrFilm.find(item => item.maPhim === maPhim)
        console.log(object)
    }

    return (
        <div className="quanLyPhim">
            <Button type="primary" onClick={showDrawer}>Thêm Phim</Button>
            <Drawer
                className="themPhim"
                title="Thêm Phim"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <ThemPhim />
            </Drawer>
            <div style={{ margin: '10px 0' }}>
                <Space direction="vertical" >
                    <Search size={'large'} placeholder="Tìm Kiếm..."  onSearch={onSearch} enterButton />
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
                                <Button type="primary" onClick={()=>handleClick(text)}><FolderAddOutlined /></Button>
                                <Button type="primary" onClick={()=>handleClick(record)}><EditOutlined /></Button>
                                <Button type="primary" danger onClick={()=>handleClick(record)}><DeleteOutlined /></Button>
                            </Space>
                        )}
                    />
                </ColumnGroup>

            </Table>
        </div>
    )
}
