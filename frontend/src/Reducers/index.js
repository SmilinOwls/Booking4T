import {combineReducers} from 'redux';
import hotelsReducer from './HotelsReducer';
import sitesReducer from './SitesReducer';

const rootReducer = combineReducers({
    hotels: hotelsReducer,
    sites: sitesReducer
});

export default rootReducer;