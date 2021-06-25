import React, { Fragment } from 'react'
import 'antd/dist/antd.css';
import './HomeTemplate.css';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MyCarousel from '../../components/Carousel/Carousel'
export default function HomeTemplate() {

    return (
        <Fragment>

            <Header />
            <MyCarousel />
            <Footer />
        </Fragment>
    )
}
