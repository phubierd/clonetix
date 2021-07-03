import React, { Fragment, useEffect } from 'react'
import 'antd/dist/antd.css';
import './Home.css';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MyCarousel from '../../components/Carousel/Carousel'
import ListFilm from '../../components/ListFilm/ListFilm';
import ListCinema from '../../components/ListCinema/ListCinema';
import AppMobile from '../../components/AppMobile/AppMobile';
import News from 'components/News/News';

export default function Home() {



    return (
        <Fragment>
            <Header />
            <MyCarousel />
            <ListFilm />
            {/* <ListCinema /> */}
            <News />
            <AppMobile />
            <Footer />
        </Fragment>
    )
}
