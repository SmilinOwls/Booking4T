import {GET_HOTEL_FAILURE, GET_HOTEL_SUCCESS, GET_HOTEL_REQUEST} from '../Constants/HotelsConstant';

const initialState = {
    hotels: [],
    isLoading: false,
    error: null
};

function hotelsReducer(state=initialState, action){
    switch(action.type){
        case GET_HOTEL_REQUEST:{
            return {...state, isLoading:true, error: null}
        }
        case GET_HOTEL_SUCCESS: {
            return {...state, isLoading:false, hotels: action.payload}
        }
        case GET_HOTEL_FAILURE:{
            return {...state, isLoading: false, error: action.error}
        }
        default:
            return state;
    }
};

export default hotelsReducer;