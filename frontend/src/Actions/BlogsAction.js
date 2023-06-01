import {GET_BLOG_FAILURE, GET_BLOG_SUCCESS, GET_BLOG_REQUEST} from '../Constants/BlogsConstant';
import blogApi from '../Services/blogApi'

export function getBlogs(){
    return async(dispatch) => {
        dispatch({type: GET_BLOG_REQUEST});
        try {
            const {data} = await blogApi.getBlogs();
            dispatch({type: GET_BLOG_SUCCESS, payload: data});
        } catch (error) {
            dispatch({
                type: GET_BLOG_FAILURE,
                error: {error}
            })
        }
    }
}