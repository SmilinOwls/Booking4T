import axios from 'axios'
import { base_url} from './baseUrl';
import {configAxios} from './config';


class DataAPI {
    // User
    static async getAllUsers() {
        try {
            const response = await axios.get(`${base_url}/user/admin`, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async getUserById(id) {
        try {
            const response = await axios.get(`${base_url}/user/${id}`, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    static async updateUser(user){
        try {
            const response = await axios.put(`${base_url}/user/admin/${user._id}`,user, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async deleteUser(id){
        try {
            const response = await axios.delete(`${base_url}/user/admin/${id}`, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Place
    static async getAllPlaces() {
        try {
            const response = await axios.get(`${base_url}/place`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async getPlaceById(id) {
        try {
            const response = await axios.get(`${base_url}/place/${id}`, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async addPlace(place) {
        try {
            const response = await axios.post(`${base_url}/place/admin`,place, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    static async updatePlace(place){
        try {
            const response = await axios.put(`${base_url}/place/admin/${place._id}`, place, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    

    static async deletePlace(id){
        try {
            const response = await axios.delete(`${base_url}/place/admin/${id}`, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async deleteReview(placeId, reviewId){
        try {
            const response = await axios.delete(`${base_url}/place/user/review?placeId=${placeId}&reviewId=${reviewId}`, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Room
    static async getAllRooms() {
        try {
            const response = await axios.get(`${base_url}/room`, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async addRoom(room) {
        try {
            const response = await axios.post(`${base_url}/room/admin/${room.place}`,room, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    static async updateRoom(room){
        try {
            const response = await axios.put(`${base_url}/room/admin/${room._id}`,room, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async deleteRoom(id){
        try {
            const response = await axios.delete(`${base_url}/room/admin/${id}`, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Blog
    static async getAllBlogs() {
        try {
            const response = await axios.get(`${base_url}/blog`, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async addBlog(blog) {
        try {
            const response = await axios.post(`${base_url}/blog/admin`,blog, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    static async updateBlog(blog){
        try {
            const response = await axios.put(`${base_url}/blog/admin/${blog._id}`,blog, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async deleteBlog(id){
        try {
            const response = await axios.delete(`${base_url}/blog/admin/${id}`, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Order
    static async getAllOrders() {
        try {
            const response = await axios.get(`${base_url}/book`, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    static async updateOrder(order){
        console.log(order);
        try {
            const response = await axios.put(`${base_url}/book/admin/${order._id}`, order, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async deleteOrder(id){
        try {
            const response = await axios.delete(`${base_url}/book/admin/${id}`, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Site
    static async getAllSites() {
        try {
            const response = await axios.get(`${base_url}/site`, configAxios);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default DataAPI;