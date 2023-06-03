import axiosClient from './axiosClient';

const siteApi = {
    getSites: () => {
        return axiosClient.get("/api/site/");
    },
    getSiteById: (siteId) => {
        return axiosClient.get("/api/site/" + siteId);
    }
}

export default siteApi;