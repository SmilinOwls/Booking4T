import { GET_BLOG, ADD_BLOG, UPDATE_BLOG, DELETE_BLOG } from './types';
import DataAPI from '../utils/DataAPI';

export const getBlog = () => {
    return (dispatch) => {
        DataAPI.getAllBlogs().then((blogs) => {
            dispatch({
                type: GET_BLOG,
                blogs: blogs
            });
        }).catch((error) => {
            throw error;
        })
    }
};

export const addBlog = (blog) => {

    return (dispatch) => {
        DataAPI.addBlog(blog).then((blog) => {
            dispatch({
                type: ADD_BLOG,
                blog: blog
            });
        }).catch((error) => {
            throw error;
        })
    }
};

export const updateBlog = (blog) => {

    return (dispatch) => {
        DataAPI.updateBlog(blog).then((blog) => {
            dispatch({
                type: UPDATE_BLOG,
                blog: blog
            });
        }).catch((error) => {
            throw error;
        })
    }
};

export const deleteBlog = _id => {
    return (dispatch) => {
        DataAPI.deleteBlog(_id).then(() => {
            dispatch({
                type: DELETE_BLOG,
                _id
            });
        }).catch((error) => {
            throw error;
        })
    }
};