import React, { useEffect, useState } from 'react'
import { Button, Space, Table, Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getApiFilmAction } from 'redux/action/FilmAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import './QuanLyPhim.css'
import ThemPhim from './ThemPhim';
export default function QuanLyPhim(props) {

    const dispatch = useDispatch();
    const { Column, ColumnGroup } = Table;
    const { arrFilm } = useSelector(state => state.FilmReducer)
    // console.log('arrFilm',arrFilm)
    const data = arrFilm;


    // ====modal
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        dispatch(getApiFilmAction());
    }, [])
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
            <Table dataSource={data}>
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
                            <>{moment(record.ngayKhoiChieu).format('MMMM Do YYYY, h:mm:ss a')}</>
                        )}
                    />
                    <Column title="Đánh Giá" dataIndex="danhGia" key="danhGia" />
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <Space>
                                <NavLink to="/"><Button type="primary">Tạo Lịch Chiếu</Button></NavLink>
                                <NavLink to="/"><Button type="primary">Chỉnh Sửa</Button></NavLink>
                                <br />
                                <Button type="primary" danger>XÓA</Button>
                            </Space>
                        )}
                    />
                </ColumnGroup>

            </Table>
        </div>
    )
}
