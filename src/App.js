import './App.css';
import Home from './pages/Home/Home';
// import HomeTemplate from './template/HomeTemplate/HomeTemplate';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MyCarousel from './components/Carousel/Carousel'
import ListFilm from './components/ListFilm/ListFilm';
import ListCinema from './components/ListCinema/ListCinema';
import AppMobile from './components/AppMobile/AppMobile';
import News from 'components/News/News';

function App() {
  return (

    <>
      <Header />
      <MyCarousel />
      <ListFilm />
      <ListCinema />
      <News />
      <AppMobile />
      <Footer />
    </>



  );
}

export default App;
