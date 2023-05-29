import axiosClient from './axiosClient';

const siteApi = {
    getSites: () => {
        return axiosClient.get("/api/site/");
    }
}

export default siteApi;