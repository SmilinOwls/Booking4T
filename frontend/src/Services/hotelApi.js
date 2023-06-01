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
            url = `/api/ratings?ratings[${options}]=${ratings}`
        }
        return axiosClient.get(url);
    }
}

export default hotelApi;