import axiosClient from "./axiosClient";

const notiAPI = {
    getAllNotiByIdAccount: (id) => {
        const url = "/api/v1/notification/selectAllByAccId?id="+id;
        return axiosClient.application.get(url);
    },
};

export default notiAPI;
