import {combineReducers} from 'redux';
// import errorReducer from './errorReducer';
import auth from './auth';
import demo from './demo';
const rootReducer = combineReducers({
    auth: auth,
    demo: demo
})

export default rootReducer;