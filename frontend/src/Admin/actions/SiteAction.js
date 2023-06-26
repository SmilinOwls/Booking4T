import { GET_SITE } from './types';
import DataAPI from '../utils/DataAPI';

export const getSite = () => {
    return (dispatch) => {
        DataAPI.getAllSites().then((sites) => {
            dispatch({
                type: GET_SITE,
                sites: sites
            });
        }).catch((error) => {
            throw error;
        })
    }
};