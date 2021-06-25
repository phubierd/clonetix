import React, { Fragment } from 'react'
import 'antd/dist/antd.css';
import './Home.css';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MyCarousel from '../../components/Carousel/Carousel'
import ListFilm from '../../components/ListFilm/ListFilm';

export default function Home() {
    return (
        <Fragment>

            <Header />
            <MyCarousel />
            <ListFilm />
            <Footer />
        </Fragment>
    )
}
