import {combineReducers} from 'redux';
import hotelsReducer from './HotelsReducer';
import sitesReducer from './SitesReducer';
import { hotelsFilterReducer } from './HotelsFilterReducer';

const rootReducer = combineReducers({
    hotels: hotelsReducer,
    sites: sitesReducer,
    getHotelsFilter: hotelsFilterReducer
});

export default rootReducer;