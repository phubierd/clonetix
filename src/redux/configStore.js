import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from 'redux-thunk'
import {FilmReducer} from './reducers/FilmReducer'
import {UserReducer} from './reducers/UserReducer'
import {CinemaReducer} from './reducers/CinemaReducer'
const rootReducer = combineReducers({
    FilmReducer,
    UserReducer,
    CinemaReducer,
    

})

export const store = createStore(rootReducer,applyMiddleware(reduxThunk))