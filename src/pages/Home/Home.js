import React, { Fragment, useRef } from 'react'
import 'antd/dist/antd.css';
import './Home.css';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MyCarousel from '../../components/Carousel/Carousel'
import ListFilm from '../../components/ListFilm/ListFilm';
import AppMobile from '../../components/AppMobile/AppMobile';
import News from 'components/News/News';
import HomeCinema from 'components/HomeCinema/HomeCinema';
import HeaderRes from 'components/Header/HeaderRes';

export default function Home(props) {
    console.log(props)
    // const listFilmRef = useRef(null)
    // const homeCinemaRef = useRef(null)
    // const newsRef = useRef(null)
    // const appMobileRef = useRef(null)

    const arrStt = [1, 2, 3, 4]
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView()
    console.log(myRef)

    return (
        <Fragment>
            {/* <Header executeScroll={executeScroll} /> */}
            <HeaderRes/>
            <MyCarousel />
            <ListFilm myRef={myRef} />
            <HomeCinema myRef={myRef} />
            <News />
            <AppMobile />
            <Footer />
            
        </Fragment>
    )
}
