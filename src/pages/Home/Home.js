import React, { Fragment, useEffect } from 'react'
import 'antd/dist/antd.css';
import './Home.css';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MyCarousel from '../../components/Carousel/Carousel'
import ListFilm from '../../components/ListFilm/ListFilm';
import AppMobile from '../../components/AppMobile/AppMobile';
import News from 'components/News/News';
import HomeCinema from 'components/HomeCinema/HomeCinema';

export default function Home() {



    return (
        <Fragment>
            <Header />
            <MyCarousel />
            <ListFilm />
            <HomeCinema/>
            <News />
            <AppMobile />
            <Footer />
        </Fragment>
    )
}
