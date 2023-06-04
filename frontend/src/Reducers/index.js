import {combineReducers} from 'redux';
import hotelsReducer from './HotelsReducer';
import {placeSiteReducer, sitesReducer} from './SitesReducer';
import { hotelsFilterReducer } from './HotelsFilterReducer';
import blogsReducer from './BlogsReducer';
import detailSiteReducer from './DetailSiteReducer';
import detailBlogReducer from './DetailBlog';

const rootReducer = combineReducers({
    hotels: hotelsReducer,
    sites: sitesReducer,
    getHotelsFilter: hotelsFilterReducer,
    blogs: blogsReducer,
    detailSite: detailSiteReducer,
    detailBlog: detailBlogReducer,
    placeSite: placeSiteReducer
});

export default rootReducer;