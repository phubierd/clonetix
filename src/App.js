import './App.css';
import Home from './pages/Home/Home';
// import HomeTemplate from './template/HomeTemplate/HomeTemplate';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import FilmDetail from 'pages/FilmDetail/FilmDetail';
import CheckOut from 'pages/CheckOut/CheckOut';
import UserLogin from 'pages/UserLogin/UserLogin';
import Register from 'pages/Register/Register';


//thư viện giúp chuyển hướng trang từ các component k có props truyền vào match or history
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

function App() {
  return (

    <Router history={history}>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/filmdetail/:postID" component={FilmDetail} />
        <Route exact path="/checkout/:id" component={CheckOut} />
        <Route exact path="/userlogin" component={UserLogin} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>





  );
}

export default App;
