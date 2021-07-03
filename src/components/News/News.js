import { Row, Col, Tabs, Card, Avatar } from 'antd'
import React from 'react'
import './New.css'

export default function News() {

    const { TabPane } = Tabs;
    const { Meta } = Card;
    const style = { background: '#0092ff', padding: '8px 0' }

    return (
        <div style={{margin: '20px 0'}}>
            <Row justify="center">
                <Col span={16}>
                    <Tabs defaultActiveKey="1" centered className="news">
                        <TabPane tab="Điện Ảnh 24h" key="1">
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Card className="news__card" hoverable={true}
                                        style={{ width: '100%' }}
                                        cover={
                                            <img height="250px"
                                                alt="example"
                                                src="./img/lat-mat-48h-16177782153424.png"
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất"
                                            description="Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ"
                                        />
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card className="news__card" hoverable={true}
                                        style={{ width: '100%' }}
                                        cover={
                                            <img height="250px"
                                                alt="example"
                                                src="./img/news/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png"
                                            />
                                        }
                                    >
                                        <Meta
                                            title="[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM"
                                            description="Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt..."
                                        />
                                    </Card>
                                </Col>
                            </Row>
                            <Row gutter={16} style={{ marginTop: '20px' }}>
                                <Col span={8}>
                                    <Card className="news__card gutter-row" hoverable={true}
                                        style={{ width: '100%' }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="./img/news/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png"
                                            />
                                        }
                                    >
                                        <Meta
                                            title="PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù đàn ông để đời"
                                            description='Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai...'
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card className="news__card gutter-row" hoverable={true}
                                        style={{ width: '100%' }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="./img/news/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png"
                                            />
                                        }
                                    >
                                        <Meta
                                            title="VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM"
                                            description="Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park..."
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Row gutter={24} >
                                        <Col span={4}>
                                            <img src="./img/news/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg" height="50px" width="50px" />
                                        </Col>
                                        <Col span={20}>
                                            <p>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p>
                                        </Col>
                                    </Row>
                                    <Row gutter={24} style={{ marginTop: 10 }}>
                                        <Col span={4}>
                                            <img src="/img/news/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png" height="50px" width="50px" />
                                        </Col>
                                        <Col span={20}>
                                            <p>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</p>
                                        </Col>
                                    </Row>
                                    <Row gutter={24} style={{ marginTop: 10 }}>
                                        <Col span={4}>
                                            <img src="/img/news/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png" height="50px" width="50px" />
                                        </Col>
                                        <Col span={20}>
                                            <p>Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu </p>
                                        </Col>
                                    </Row>
                                    <Row gutter={24} style={{ marginTop: 10 }}>
                                        <Col span={4}>
                                            <img src="/img/news/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg" height="50px" width="50px" />
                                        </Col>
                                        <Col span={20}>
                                            <p>NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN</p>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="Review" key="2">
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Card className="news__card" hoverable={true}
                                        style={{ width: '100%' }}
                                        cover={
                                            <img height="250px"
                                                alt="example"
                                                src="./img/review/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết"
                                            description="Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám"
                                        />
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card className="news__card" hoverable={true}
                                        style={{ width: '100%' }}
                                        cover={
                                            <img height="250px"
                                                alt="example"
                                                src="./img/review/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Review: Dinh Thự Oan Khuất (Ghost Of War)"
                                            description="Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!"
                                        />
                                    </Card>
                                </Col>
                            </Row>
                            <Row gutter={16} style={{ marginTop: '20px' }}>
                                <Col span={8}>
                                    <Card className="news__card gutter-row" hoverable={true}
                                        style={{ width: '100%' }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="./img/review/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
                                            />
                                        }
                                    >
                                        <Meta
                                            title="PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù đàn ông để đời"
                                            description='Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai...'
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card className="news__card gutter-row" hoverable={true}
                                        style={{ width: '100%' }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="./img/review/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
                                            />
                                        }
                                    >
                                        <Meta
                                            title="VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM"
                                            description="Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park..."
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Row gutter={24} >
                                        <Col span={4}>
                                            <img src="./img/news/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg" height="50px" width="50px" />
                                        </Col>
                                        <Col span={20}>
                                            <p>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p>
                                        </Col>
                                    </Row>
                                    <Row gutter={24} style={{ marginTop: 10 }}>
                                        <Col span={4}>
                                            <img src="/img/news/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png" height="50px" width="50px" />
                                        </Col>
                                        <Col span={20}>
                                            <p>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</p>
                                        </Col>
                                    </Row>
                                    <Row gutter={24} style={{ marginTop: 10 }}>
                                        <Col span={4}>
                                            <img src="/img/news/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png" height="50px" width="50px" />
                                        </Col>
                                        <Col span={20}>
                                            <p>Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu </p>
                                        </Col>
                                    </Row>
                                    <Row gutter={24} style={{ marginTop: 10 }}>
                                        <Col span={4}>
                                            <img src="/img/news/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg" height="50px" width="50px" />
                                        </Col>
                                        <Col span={20}>
                                            <p>NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN</p>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="Khuyến Mãi" key="3">
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Card className="news__card" hoverable={true}
                                        style={{ width: '100%' }}
                                        cover={
                                            <img height="250px"
                                                alt="example"
                                                src="./img/review/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết"
                                            description="Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám"
                                        />
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card className="news__card" hoverable={true}
                                        style={{ width: '100%' }}
                                        cover={
                                            <img height="250px"
                                                alt="example"
                                                src="./img/review/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Review: Dinh Thự Oan Khuất (Ghost Of War)"
                                            description="Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!"
                                        />
                                    </Card>
                                </Col>
                            </Row>
                            <Row gutter={16} style={{ marginTop: '20px' }}>
                                <Col span={8}>
                                    <Card className="news__card gutter-row" hoverable={true}
                                        style={{ width: '100%' }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="./img/review/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
                                            />
                                        }
                                    >
                                        <Meta
                                            title="PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù đàn ông để đời"
                                            description='Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai...'
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card className="news__card gutter-row" hoverable={true}
                                        style={{ width: '100%' }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="./img/review/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
                                            />
                                        }
                                    >
                                        <Meta
                                            title="VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM"
                                            description="Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park..."
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Row gutter={24} >
                                        <Col span={4}>
                                            <img src="./img/news/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg" height="50px" width="50px" />
                                        </Col>
                                        <Col span={20}>
                                            <p>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p>
                                        </Col>
                                    </Row>
                                    <Row gutter={24} style={{ marginTop: 10 }}>
                                        <Col span={4}>
                                            <img src="/img/news/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png" height="50px" width="50px" />
                                        </Col>
                                        <Col span={20}>
                                            <p>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</p>
                                        </Col>
                                    </Row>
                                    <Row gutter={24} style={{ marginTop: 10 }}>
                                        <Col span={4}>
                                            <img src="/img/news/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png" height="50px" width="50px" />
                                        </Col>
                                        <Col span={20}>
                                            <p>Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu </p>
                                        </Col>
                                    </Row>
                                    <Row gutter={24} style={{ marginTop: 10 }}>
                                        <Col span={4}>
                                            <img src="/img/news/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg" height="50px" width="50px" />
                                        </Col>
                                        <Col span={20}>
                                            <p>NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN</p>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>

        </div>
    )
}
