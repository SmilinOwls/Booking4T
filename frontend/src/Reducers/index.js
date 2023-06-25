import { combineReducers } from 'redux';
import hotelsReducer from './HotelsReducer';
import { placeSiteReducer, sitesReducer } from './SitesReducer';
import { hotelsFilterReducer } from './HotelsFilterReducer';
import blogsReducer from './BlogsReducer';
import detailSiteReducer from './DetailSiteReducer';
import detailBlogReducer from './DetailBlog';
import { detailHotelReducer, getRoomByHotelReducer } from './DetailHotelReducer';
import detailRoomReducer from './DetailRoomReducer';
import { loginReducer, registerReducer, logoutReducer } from './AuthReducer'
import reviewReducer from './ReviewReducer';
import cartReducer from './CartReducer';
import adminReducer from '../Admin/reducers';
import { myOrderList, orderReducer } from './BookingReducer';

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
    review: reviewReducer,
    cart: cartReducer,
    order: orderReducer,
    myOrder: myOrderList,
    ...adminReducer
});

export default rootReducer;