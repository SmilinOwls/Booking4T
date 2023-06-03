import {combineReducers} from 'redux';
import hotelsReducer from './HotelsReducer';
import {sitesReducer} from './SitesReducer';
import { hotelsFilterReducer } from './HotelsFilterReducer';
import blogsReducer from './BlogsReducer';
import detailSiteReducer from './DetailSiteReducer';

const rootReducer = combineReducers({
    hotels: hotelsReducer,
    sites: sitesReducer,
    getHotelsFilter: hotelsFilterReducer,
    blogs: blogsReducer,
    detailSite: detailSiteReducer
});

export default rootReducer;