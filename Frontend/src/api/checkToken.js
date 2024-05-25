import axiosClient from "./axiosClient";

const checkTokenAPI = {
    checkToken: (token) => {
        const url = "/api/v1/auth/checkToken";
        return axiosClient.applicationNoAuth.post(url, { token: token });
    },
};

export default checkTokenAPI;
