import { GET_PLACE, ADD_PLACE, UPDATE_PLACE, DELETE_PLACE } from './types';
import DataAPI from '../utils/DataAPI';

export const getPlace = () => {
    return (dispatch) => {
        DataAPI.getAllPlaces().then((places) => {
            dispatch({
                type: GET_PLACE,
                places: places
            });
        }).catch((error) => {
            throw error;
        })
    }
};

export const addPlace = (place) => {
    return (dispatch) => {
        DataAPI.addPlace(place).then((place) => {
            dispatch({
                type: ADD_PLACE,
                place: place
            });
        }).catch((error) => {
            throw error;
        })
    }
};

export const updatePlace = (place) => {
    return (dispatch) => {
        DataAPI.updatePlace(place).then((place) => {
            
            dispatch({
                type: UPDATE_PLACE,
                place: place
            });
        }).catch((error) => {
            throw error;
        })
    }

};

export const deletePlace = (_id, messageApi) => {
    return (dispatch) => {
        DataAPI.deletePlace(_id).then(() => {
            dispatch({
                type: DELETE_PLACE,
                _id
            });
        }).catch((error) => {
            messageApi.open({
                type: 'error',
                content: error.response.data.message,
              });
        })
    }
};