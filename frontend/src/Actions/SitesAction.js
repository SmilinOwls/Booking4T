import {GET_SITE_FAILURE, GET_SITE_SUCCESS, GET_SITE_REQUEST} from '../Constants/SitesConstants';
import siteApi from '../Services/siteApi';

export function getSites(){
    return async(dispatch) => {
        dispatch({type: GET_SITE_REQUEST});
        try {
            const {data} = await siteApi.getSites();
            dispatch({type: GET_SITE_SUCCESS, payload: data});
        } catch (error) {
            dispatch({
                type: GET_SITE_FAILURE,
                error: {error}
            })
        }
    }
}