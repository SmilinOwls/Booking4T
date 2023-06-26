import { GET_ORDER, UPDATE_ORDER, DELETE_ORDER } from './types';
import DataAPI from '../utils/DataAPI';

export const getOrder = () => {

  return (dispatch) => {
    DataAPI.getAllOrders().then((orders) => {
      dispatch({
        type: GET_ORDER,
        orders: orders
      });
    }).catch((error) => {
      throw error;
    })
  }
};

export const updateOrder = (order) => {

  return (dispatch) => {
    DataAPI.updateOrder(order).then(() => {
      dispatch({
        type: UPDATE_ORDER,
        order: order
      });
    }).catch((error) => {
      throw error;
    })
  }
};

export const deleteOrder = _id => {
  return (dispatch) => {
    DataAPI.deleteOrder(_id).then(() => {
      dispatch({
        type: DELETE_ORDER,
        _id
      });

    }).catch((error) => {
      throw error;
    })
  }
};