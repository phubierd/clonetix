import React from 'react'
import { Carousel, Icon } from 'antd';
import { Layout } from 'antd';
import './Carousel.css'


export default function MyCarousel(props) {
    const contentStyle = {
        height: '700px',
        width: '100%',
    };
   

    const { Content } = Layout;
    return (

        <Content className="site-layout" style={{ marginTop: 64 }}>
            <div className="site-layout-background" style={{ minHeight: 380 }}>
                <Carousel autoplay  draggable={true} >
                    <div>

                        <div className="carousel__img">
                            <img src='./img/banTay-carousel.png' style={contentStyle}></img>
                            <img className="playBtn" src='./img/play-video.png' />
                        </div>

                    </div>
                    <div>
                        <div className="carousel__img">
                            <img src='./img/latMat-carousel.jpg' style={contentStyle}></img>
                            <img className="playBtn" src='./img/play-video.png' />
                        </div>
                    </div>
                    <div>
                        <div className="carousel__img">
                            <img src='./img/trangTi-carousel.jpg' style={contentStyle}></img>
                            <img className="playBtn" src='./img/play-video.png' />
                        </div>
                    </div>
                </Carousel>

               

            </div>
        </Content>

    )
}
