import React from 'react'
import { Carousel, Icon } from 'antd';
import { Layout } from 'antd';
import './Carousel.css'


export default function MyCarousel(props) {
    const contentStyle = {
        height: '800px',
        width: '100%',
    };
   

    const { Content } = Layout;
    return (

        <Content className="site-layout" style={{ marginTop: 64 }}>
            <div className="site-layout-background" style={{ minHeight: 380 }}>
                <Carousel autoplay  draggable={true} fade={true}>
                    <div>

                        <div className="carousel__img">
                            <img src='./img/carousel/blackwidow1_1622435963567.jpg' style={contentStyle}></img>
                            <img className="playBtn" src='./img/play-video.png' />
                        </div>

                    </div>
                    <div>
                        <div className="carousel__img">
                            <img src='./img/carousel/review-phim-loki-poster-phim-elle-man-cover-photo.jpeg' style={contentStyle}></img>
                            <img className="playBtn" src='./img/play-video.png' />
                        </div>
                    </div>
                    <div>
                        <div className="carousel__img">
                            <img src='./img/carousel/WandaVision-Character-Posters-And-Key-Art.jpg' style={contentStyle}></img>
                            <img className="playBtn" src='./img/play-video.png' />
                        </div>
                    </div>
                </Carousel>

               

            </div>
        </Content>

    )
}
