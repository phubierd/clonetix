import React, { useState } from 'react'
import { Carousel, Modal } from 'antd';
import { Layout } from 'antd';
import './Carousel.css'


export default function MyCarousel(props) {
    const [carouselTrailer, setCarouselTrailer] = useState({})
    const [isVideoPlaying,setIsVideoPlaying] = useState(false)
    const contentStyle = {
        height: '800px',
        width: '100%',
    };
    const arrCarousel = [
        { stt: 1, hinhAnh: './img/carousel/blackwidow1_1622435963567.jpg', trailer: 'https://www.youtube.com/embed/Fp9pNPdNwjI' },
        { stt: 2, hinhAnh: './img/carousel/review-phim-loki-poster-phim-elle-man-cover-photo.jpeg', trailer: 'https://www.youtube.com/embed/nW948Va-l10' },
        { stt: 3, hinhAnh: './img/carousel/WandaVision-Character-Posters-And-Key-Art.jpg', trailer: 'https://www.youtube.com/embed/sj9J2ecsSpo' },
    ]
    const handleClickCarousel = (stt) => {
        const result = arrCarousel.find(item => item.stt === stt)
        // console.log(result,'clicking ...')
        setCarouselTrailer(result)
        setIsVideoPlaying(true)
    }
    const handleResetTrailer = ()=>{
        setIsVideoPlaying(false)
    }
    // ======== trailer modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        // window.location.reload()
    };

    const { Content } = Layout;
    // console.log(isVideoPlaying,'isVideoPlaying')
    return (

        <Content className="site-layout" style={{ marginTop: 64 }}>
            <div className="site-layout-background" style={{ minHeight: 380 }}>
                <Carousel autoplay draggable={true} fade={true}>
                    {arrCarousel.map((item, index) => {
                        return <div key={index}>

                            <div className="carousel__img" onClick={()=>handleClickCarousel(item.stt)}>
                                <img src={item.hinhAnh} style={contentStyle} alt="..."></img>
                                <img className="playBtn" src='./img/play-video.png' onClick={showModal} alt="..." />
                                {
                                    isVideoPlaying && <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className="carousel__modal" afterClose={handleResetTrailer}>
                                    {
                                        <iframe width="100%" height="100%" src={carouselTrailer?.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    }
                                </Modal>
                                }
                            </div>

                        </div>
                    })}
                </Carousel>
            </div>
        </Content>

    )
}
