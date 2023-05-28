import {combineReducers} from 'redux';
import hotelsReducer from './HotelsReducer';

const rootReducer = combineReducers({
    hotels: hotelsReducer
});

export default rootReducer;