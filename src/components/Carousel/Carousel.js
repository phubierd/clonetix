import React from 'react'
import { Carousel, Icon } from 'antd';
import { Layout } from 'antd';
import './Carousel.css'
import carousel1 from 'asset/img/trangTi-carousel.jpg'
import carousel2 from 'asset/img/latMat-carousel.jpg'
import carousel3 from 'asset/img/banTay-carousel.png'
import playBtn from 'asset/img/play-video.png'

export default function MyCarousel(props) {
    const contentStyle = {
        height: '580px',
        width: '100%',
    };
   

    const { Content } = Layout;
    return (

        <Content className="site-layout" style={{ marginTop: 64 }}>
            <div className="site-layout-background" style={{ minHeight: 380 }}>
                <Carousel autoplay arrows >
                    <div>

                        <div className="carousel__img">
                            <img src={carousel1} style={contentStyle}></img>
                            <img className="playBtn" src={playBtn} />
                        </div>

                    </div>
                    <div>
                        <div className="carousel__img">
                            <img src={carousel2} style={contentStyle}></img>
                            <img className="playBtn" src={playBtn} />
                        </div>
                    </div>
                    <div>
                        <div className="carousel__img">
                            <img src={carousel3} style={contentStyle}></img>
                            <img className="playBtn" src={playBtn} />
                        </div>
                    </div>
                </Carousel>

               

            </div>
        </Content>

    )
}
