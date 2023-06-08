import axiosClient from './axiosClient';


const hotelApi = {
    getHotels: () => {
        return axiosClient.get("/api/place/");
    },
    getHotelsFilter: (ratings, options) => {
        let url = '/api/place/';
        if(ratings){
            url = '/api/place?ratings=' + ratings;
        }
        if(ratings && options){
            url = `/api/place?ratings[${options}]=${ratings}`
        }
        return axiosClient.get(url);
    },
    getDetailHotel: (hotelId) => {
        return axiosClient.get('/api/place/' + hotelId);
    },
    getRoomsByHotel: (hotelId) => {
        return axiosClient.get('/api/room/allrooms/' + hotelId);
    }
}

export default hotelApi;