import {combineReducers} from 'redux';
import gifsReducer from './gifs.reducer';


// Centralized state managment store for the entire application
const rootReducer = combineReducers({
    gifsReducer
})

export default rootReducer;
