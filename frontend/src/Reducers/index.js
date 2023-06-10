import {combineReducers} from 'redux';
import hotelsReducer from './HotelsReducer';
import {placeSiteReducer, sitesReducer} from './SitesReducer';
import { hotelsFilterReducer } from './HotelsFilterReducer';
import blogsReducer from './BlogsReducer';
import detailSiteReducer from './DetailSiteReducer';
import detailBlogReducer from './DetailBlog';
import {detailHotelReducer, getRoomByHotelReducer} from './DetailHotelReducer';
import detailRoomReducer from './DetailRoomReducer';
import {loginReducer, registerReducer, logoutReducer} from './AuthReducer'

const rootReducer = combineReducers({
    hotels: hotelsReducer,
    sites: sitesReducer,
    getHotelsFilter: hotelsFilterReducer,
    blogs: blogsReducer,
    detailSite: detailSiteReducer,
    detailBlogs: detailBlogReducer,
    detailHotel: detailHotelReducer,
    placeSite: placeSiteReducer,
    roomAtHotel: getRoomByHotelReducer,
    detailRoom: detailRoomReducer,
    register: registerReducer,
   login: loginReducer,
   logout: logoutReducer,
});

export default rootReducer;