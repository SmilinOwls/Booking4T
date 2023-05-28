import {GET_HOTEL_FAILURE, GET_HOTEL_SUCCESS, GET_HOTEL_REQUEST} from '../Constants/HotelsConstant';
import hotelApi from '../Services/hotelApi';

export function getHotels() {
    return async(dispatch) => {
        dispatch({type: GET_HOTEL_REQUEST});
        try {
            const {data} = await hotelApi.getHotels();
            dispatch({type: GET_HOTEL_SUCCESS, payload: data});
        } catch (error) {
            dispatch({
                type: GET_HOTEL_FAILURE,
                error: {error}
            })
        }
    }
}