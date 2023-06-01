import {GET_HOTEL_FILTER_FAILURE, GET_HOTEL_FILTER_REQUEST, GET_HOTEL_FILTER_SUCCESS} from '../Constants/HotelsConstant';

const initialState = {
    hotelsFilter: [],
    isLoading: false,
    error: null
};

export function hotelsFilterReducer(state=initialState, action){
    switch(action.type){
        case GET_HOTEL_FILTER_REQUEST:
            return {...state, isLoading: true}
        case GET_HOTEL_FILTER_SUCCESS:
            return {...state, isLoading: false, hotelsFilter: action.payload}
        case GET_HOTEL_FILTER_FAILURE:
            return {...state, isLoading: false, error: action.error}
        default:
            return state;
    }
}