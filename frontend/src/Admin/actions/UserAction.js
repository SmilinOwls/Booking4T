import { GET_USER, UPDATE_USER, DELETE_USER } from './types';
import DataAPI from '../utils/DataAPI';

export const getUser = () => {
    return (dispatch) => {
        DataAPI.getAllUsers().then((users) => {
            dispatch({
                type: GET_USER,
                users: users
            });
        }).catch((error) => {
            throw error;
        })
    }
};


export const updateUser = (user) => {
    console.log(user);
    return (dispatch) => {
        DataAPI.updateUser(user).then(() => {
            dispatch({
                type: UPDATE_USER,
                user: user
            });
        }).catch((error) => {
            throw error;
        })
    }
};

export const deleteUser = _id => {
    return (dispatch) => {
        DataAPI.deleteUser(_id).then(() => {
            dispatch({
                type: DELETE_USER,
                _id
            });
        }).catch((error) => {
            throw error;
        })
    }
};