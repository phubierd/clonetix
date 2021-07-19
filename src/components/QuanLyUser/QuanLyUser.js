import React from 'react'
import { Table, Tag, Space } from 'antd';

export default function QuanLyUser() {
    const { Column, ColumnGroup } = Table;
    const data = [
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return (
        <div>
            QuanLyUser
            <Table dataSource={data}>
                <ColumnGroup title="Quản Lý Người Dùng">
                    <Column title="Họ Tên" dataIndex="firstName" key="firstName" />
                    <Column title="Tài Khoản" dataIndex="firstName" key="firstName" />
                    <Column title="Mật Khẩu" dataIndex="firstName" key="firstName" />
                    <Column title="Email" dataIndex="lastName" key="lastName" />
                    <Column title="Số Điện Thoại" dataIndex="age" key="age" />
                    <Column
                        title="Tags"
                        dataIndex="tags"
                        key="tags"
                        render={tags => (
                            <>
                                {tags.map(tag => (
                                    <Tag color="blue" key={tag}>
                                        {tag}
                                    </Tag>
                                ))}
                            </>
                        )}
                    />
                    <Column
                        title=""
                        key="action"
                        render={(text, record) => (
                            <Space size="middle">
                                <a>Invite {record.lastName}</a>
                                <a>Delete</a>
                            </Space>
                        )}
                    />
                </ColumnGroup>

            </Table>
        </div>
    )
}
