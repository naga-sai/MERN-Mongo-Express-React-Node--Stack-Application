import postReducer from "./post";
import authReducer from "./auth";
import {combineReducers} from 'redux';

const reducer =combineReducers({
    post:postReducer,
    authReducer});
export default reducer;