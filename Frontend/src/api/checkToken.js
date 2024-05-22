import axiosClient from "./axiosClient";

const checkTokenAPI = {
    checkToken: () => {
        const url = "/api/v1/auth/checkToken";
        return axiosClient.application.get(url);
    },
};

export default checkTokenAPI;
