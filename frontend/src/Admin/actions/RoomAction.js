import { GET_ROOM, ADD_ROOM, UPDATE_ROOM, DELETE_ROOM } from './types';
import DataAPI from '../utils/DataAPI';

export const getRoom = () => {

    return (dispatch) => {
        DataAPI.getAllRooms().then((rooms) => {
            dispatch({
                type: GET_ROOM,
                rooms: rooms
            });
        }).catch((error) => {
            throw error;
        })
    }
};

export const addRoom = (room) => {
    console.log(room);
    return (dispatch) => {
        DataAPI.addRoom(room).then((room) => {
            dispatch({
                type: ADD_ROOM,
                room: room
            });
        }).catch((error) => {
            throw error;
        })
    }
};

export const updateRoom = (room) => {

    return (dispatch) => {
        DataAPI.updateRoom(room).then((room) => {
            dispatch({
                type: UPDATE_ROOM,
                room: room
            });
        }).catch((error) => {
            throw error;
        })
    }
};

export const deleteRoom = _id => {

    return (dispatch) => {
        DataAPI.deleteRoom(_id).then(({success, message}) => {
            dispatch({
                type: DELETE_ROOM,
                _id
            });
        }).catch((error) => {
            console.log(error);
        })
    }
};