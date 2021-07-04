import './App.css';
import Home from './pages/Home/Home';
// import HomeTemplate from './template/HomeTemplate/HomeTemplate';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FilmDetail from 'pages/FilmDetail/FilmDetail';
import CheckOut from 'pages/CheckOut/CheckOut';

function App() {
  return (

    <BrowserRouter>

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/filmdetail/:postID" component={FilmDetail} />
        <Route exact path="/checkout/:id" component={CheckOut}/>

        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>





  );
}

export default App;
