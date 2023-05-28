import axiosClient from './axiosClient';


const hotelApi = {
    getHotels: () => {
        return axiosClient.get("/api/place/");
    },
}

export default hotelApi;